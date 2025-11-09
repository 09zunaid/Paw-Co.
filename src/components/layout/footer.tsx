import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Icons.logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-headline">Paw & Co.</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Your partner in happy, healthy pet parenting.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-headline mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/shop?pet=dogs" className="text-sm text-muted-foreground hover:text-primary">Dogs</Link></li>
              <li><Link href="/shop?pet=cats" className="text-sm text-muted-foreground hover:text-primary">Cats</Link></li>
              <li><Link href="/shop" className="text-sm text-muted-foreground hover:text-primary">New Arrivals</Link></li>
              <li><Link href="/shop" className="text-sm text-muted-foreground hover:text-primary">Top Brands</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-headline mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Our Story</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQs</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold font-headline mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">Get exclusive deals and pet tips.</p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0" />
              <Button type="submit" className="rounded-l-none">Sign Up</Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Paw & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
