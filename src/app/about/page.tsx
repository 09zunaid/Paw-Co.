import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PawPrint, Leaf, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'hero-dog-owner') ?? PlaceHolderImages[0];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Story</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We're more than just a pet store. We're a community of passionate pet lovers dedicated to helping you provide the best for your furry family members.
        </p>
      </div>

      <div className="relative aspect-video max-w-5xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-lg">
        <Image 
          src={aboutImage.imageUrl}
          alt={aboutImage.description}
          fill
          className="object-cover"
          data-ai-hint={aboutImage.imageHint}
        />
      </div>

      <div className="max-w-3xl mx-auto mt-12 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Paw & Co. Pet Emporium started with a simple idea: pet parents deserve a better, more personal way to shop for their companions. Tired of overwhelming big-box stores and impersonal online marketplaces, we set out to create a curated, friendly, and knowledgeable resource for the devoted pet owner.
        </p>
        <p>
          Our journey began in a small local shop, where we got to know our customers and their pets by name. We learned about their specific needs, their joys, and their challenges. This hands-on experience is the foundation of everything we do. We carefully select every product on our shelves (and our website), ensuring it meets our high standards for quality, safety, and effectiveness.
        </p>
        <p>
          As we've grown, our commitment to that local-store feeling has remained. We believe that being a pet parent is one of life's greatest joys, and we're here to be your partner every step of the way—offering expert advice, high-quality products, and the convenience you need to spend less time shopping and more time making memories.
        </p>
      </div>

       <div className="mt-16">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 border rounded-2xl">
              <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-headline font-bold">Natural & Healthy</h3>
              <p className="text-muted-foreground mt-2">We prioritize products with natural ingredients, free from unnecessary fillers and artificial additives.</p>
            </div>
             <div className="text-center p-6 border rounded-2xl">
              <PawPrint className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-headline font-bold">Pet-First Philosophy</h3>
              <p className="text-muted-foreground mt-2">Every decision we make is guided by what's best for the health and happiness of pets.</p>
            </div>
             <div className="text-center p-6 border rounded-2xl">
              <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-headline font-bold">Community Focused</h3>
              <p className="text-muted-foreground mt-2">We are committed to supporting local rescues and promoting responsible pet ownership.</p>
            </div>
          </div>
       </div>
    </div>
  );
}
