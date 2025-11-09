import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gift, Repeat, Settings, Undo2 } from 'lucide-react';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const getImage = (id: string): ImagePlaceholder => {
  return PlaceHolderImages.find((img) => img.id === id) ?? PlaceHolderImages[0];
};

export default function AutoShipPage() {
  const heroImage = getImage('autoship-hero');
  const manageImage = getImage('autoship-manage');

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Savings',
      description: 'Enjoy exclusive discounts and free shipping on all your subscription orders.',
    },
    {
      icon: Repeat,
      title: 'Convenience Delivered',
      description: 'Get your pet\'s essentials delivered right to your door, right on schedule.',
    },
    {
      icon: Settings,
      title: 'Total Flexibility',
      description: 'Easily modify, skip, or cancel your subscription at any time. No strings attached.',
    },
  ];

  return (
    <div>
      <section className="bg-secondary/20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center py-12 px-4 md:px-6">
          <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-headline font-black text-primary tracking-tight">
              Happy Pets, On Repeat.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Never run out of your pet's favorites. Save time and money with our easy Auto-Ship program.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/shop">
                Browse Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative h-64 lg:h-auto lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-headline font-bold mb-4">
              The Easiest Way to a Happy Pet
            </h2>
            <p className="text-muted-foreground">Save 5% on every order, get free shipping, and never have that "oh no" moment when you see an empty food bag again.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center p-8 border rounded-2xl bg-background shadow-sm">
                <div className="bg-accent/20 p-4 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">
            How It Works in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 hidden md:block"></div>
            <div className="relative flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground font-bold text-2xl border-4 border-background z-10">1</div>
              <h3 className="text-xl font-headline font-bold mt-2">Shop & Select</h3>
              <p className="text-muted-foreground">Add your pet's must-haves to your cart and choose the "Auto-Ship & Save" option.</p>
            </div>
            <div className="relative flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground font-bold text-2xl border-4 border-background z-10">2</div>
              <h3 className="text-xl font-headline font-bold mt-2">Pick Your Schedule</h3>
              <p className="text-muted-foreground">Choose your delivery frequency, from every 2 to 12 weeks. You're in control.</p>
            </div>
            <div className="relative flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground font-bold text-2xl border-4 border-background z-10">3</div>
              <h3 className="text-xl font-headline font-bold mt-2">Relax & Enjoy</h3>
              <p className="text-muted-foreground">We'll handle the rest! Your order arrives on time, every time, so you can focus on the fun stuff.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src={manageImage.imageUrl}
                    alt={manageImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={manageImage.imageHint}
                />
            </div>
            <div>
                <h2 className="text-3xl font-headline font-bold">Complete Control, Zero Hassle</h2>
                <p className="text-muted-foreground mt-4 mb-6">Your life changes, and your pet's needs might too. That's why we made our Auto-Ship program as flexible as possible. Manage everything from your account dashboard.</p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <Undo2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold">Skip a delivery</h4>
                            <p className="text-sm text-muted-foreground">Going on vacation? Simply skip your next delivery with one click.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <Repeat className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold">Swap products</h4>
                            <p className="text-sm text-muted-foreground">Want to try a new flavor? Easily swap items in your upcoming order.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Settings className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold">Change frequency or cancel</h4>
                            <p className="text-sm text-muted-foreground">Adjust your delivery schedule or cancel your subscription anytime, hassle-free.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </section>
    </div>
  );
}
