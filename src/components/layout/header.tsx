'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const mainNav = [
  { href: '/shop', label: 'Shop' },
  { href: '/auto-ship', label: 'Auto-Ship' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Desktop: Left side - Logo & Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl font-headline">
              Paw & Co.
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            {mainNav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-primary',
                  pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile: Left side - Menu Trigger */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="mb-4 flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icons.logo className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl font-headline">Paw & Co.</span>
              </Link>
               {[...mainNav].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === href ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        
        {/* Mobile: Center - Logo */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2">
             <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="h-8 w-8 text-primary" />
            </Link>
        </div>

        {/* Right-side Icons (visible on all screen sizes) */}
        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon">
            <Link href="#">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="/account/my-pets">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="#">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
