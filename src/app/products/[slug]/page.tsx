import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Minus, Plus, Star, StarHalf } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const mainImage = PlaceHolderImages.find((img) => img.id === product.imageId) ?? PlaceHolderImages[0];
  const thumbnailImages = product.images.map(id => PlaceHolderImages.find(img => img.id === id) ?? PlaceHolderImages[0]);
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-primary">Home</Link> / <Link href="/shop" className="hover:text-primary">Shop</Link> / <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="relative aspect-square rounded-xl overflow-hidden mb-4 border">
            <Image
              src={mainImage.imageUrl}
              alt={mainImage.description}
              fill
              className="object-cover"
              data-ai-hint={mainImage.imageHint}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {thumbnailImages.map((img, index) => (
              <div key={img.id} className={`relative aspect-square rounded-lg overflow-hidden border-2 ${index === 0 ? 'border-primary' : 'border-transparent'}`}>
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover"
                  data-ai-hint={img.imageHint}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-headline font-bold">{product.name}</h1>
          <p className="text-md text-muted-foreground mt-1">by <Link href="#" className="text-primary hover:underline">{product.brand}</Link></p>
          
          <div className="flex items-center gap-2 mt-4">
            <div className="flex text-accent">
              <Star className="w-5 h-5 fill-accent" />
              <Star className="w-5 h-5 fill-accent" />
              <Star className="w-5 h-5 fill-accent" />
              <Star className="w-5 h-5 fill-accent" />
              <StarHalf className="w-5 h-5 fill-accent" />
            </div>
            <a href="#reviews" className="text-sm text-muted-foreground hover:underline">(127 reviews)</a>
          </div>

          <p className="text-4xl font-bold text-primary mt-4">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground mt-4 max-w-prose">{product.description}</p>
          
          <div className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="size-select" className="font-bold">Size</Label>
                <Select defaultValue="15lb">
                  <SelectTrigger id="size-select" className="mt-2">
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5lb">5 lb Bag</SelectItem>
                    <SelectItem value="15lb">15 lb Bag</SelectItem>
                    <SelectItem value="30lb">30 lb Bag</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div>
                <Label className="font-bold">Quantity</Label>
                <div className="flex items-center border rounded-md p-1 mt-2 w-fit">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center font-bold">1</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
              </div>
            </div>
            <Button size="lg" className="w-full">Add to Cart</Button>
            <Button size="lg" variant="outline" className="w-full">
              <Heart className="mr-2 h-5 w-5" /> Save for Later
            </Button>
          </div>
          
          <div className="mt-6">
            <h3 className="font-bold font-headline">Paw-fect For:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.perfectFor.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="description" className="mt-12">
        <TabsList>
          <TabsTrigger value="description">Full Description</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="reviews">Reviews (127)</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
            <p>Give your furry family member the best with {product.brand} {product.name}. We believe that a healthy diet is the cornerstone of a happy life, which is why we've sourced only the highest-quality, human-grade ingredients. Our primary ingredient is real, cage-free chicken, providing a rich source of protein to help maintain lean muscle mass.</p>
            <p className="mt-4">Blended with wholesome whole-grain brown rice for sustained energy and gentle fibers for digestive health, this recipe is perfect for dogs of all life stages. We've enriched our formula with essential vitamins, minerals, and antioxidants from real fruits and vegetables like carrots, blueberries, and spinach to support a strong immune system and vibrant coat. It's a bowl full of love and nutrition, with a taste your dog will wag their tail for every time.</p>
        </TabsContent>
        <TabsContent value="ingredients" className="mt-4 text-muted-foreground">
            Ingredients list for {product.name}...
        </TabsContent>
        <TabsContent value="reviews" className="mt-4 text-muted-foreground">
            Reviews for {product.name}...
        </TabsContent>
      </Tabs>
      
      <Separator className="my-16" />

      <div>
        <h2 className="text-3xl font-headline font-bold text-center mb-12">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

    </div>
  );
}
