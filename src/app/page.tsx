import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Bone,
  Cat,
  Dog,
  Heart,
  Rabbit,
  Bird,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Baby,
} from 'lucide-react';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';

const getImage = (id: string): ImagePlaceholder => {
  return PlaceHolderImages.find((img) => img.id === id) ?? PlaceHolderImages[0];
};

export default function Home() {
  const heroImage = getImage('hero-dog-owner');
  const shopDogsImage = getImage('category-dog');
  const shopCatsImage = getImage('category-cat');
  const topBrandsImage = getImage('category-brands');
  const autoShipImage = getImage('category-autoship');

  const newArrivals = products.slice(0, 8);

  const needs = [
    { name: 'Dental Health', icon: Bone, href: '/shop?need=dental-health' },
    { name: 'Anxiety Relief', icon: Sparkles, href: '/shop?need=anxiety-relief' },
    { name: 'Joint Support', icon: Heart, href: '/shop?need=joint-support' },
    { name: 'Puppy/Kitten', icon: Baby, href: '/shop?need=puppy-kitten' },
    { name: 'Training Aids', icon: GraduationCap, href: '/shop?need=training-aids' },
  ];

  const petCategories = [
    { name: 'Dogs', icon: Dog, href: '/shop?pet=dogs', image: shopDogsImage },
    { name: 'Cats', icon: Cat, href: '/shop?pet=cats', image: shopCatsImage },
    { name: 'Small Animals', icon: Rabbit, href: '/shop?pet=small-animals', image: topBrandsImage },
    { name: 'Birds', icon: Bird, href: '/shop?pet=birds', image: autoShipImage },
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-secondary/20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center py-12 px-4 md:px-6">
          <div className="flex flex-col items-start gap-4 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-headline font-black text-primary tracking-tight">
              Your Partner in Happy, Healthy Pet Parenting.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              We offer curated products, expert advice, and auto-ship convenience so you can spend less time shopping and more time with your pet.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/shop">
                Shop All Products <ArrowRight className="ml-2 h-5 w-5" />
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
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">
            Shop by Pet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {petCategories.map((category) => (
              <Link href={category.href} key={category.name} className="group">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={category.image.imageUrl}
                        alt={category.image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={category.image.imageHint}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 bg-background">
                    <div className="flex items-center gap-3">
                       <category.icon className="h-6 w-6 text-primary" />
                       <h3 className="text-lg font-bold font-headline">{category.name}</h3>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">
            New Arrivals
          </h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {newArrivals.map((product) => (
                <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/shop?filter=new">View All New Arrivals</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">
            Shop by Need
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {needs.map((need) => (
              <Link href={need.href} key={need.name} className="group">
                <div className="flex flex-col items-center gap-4 text-center p-6 border rounded-2xl transition-all duration-300 hover:bg-accent/10 hover:shadow-lg hover:-translate-y-1">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <need.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold font-headline">{need.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
