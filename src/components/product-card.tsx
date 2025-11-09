import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId) ?? PlaceHolderImages[0];

  return (
    <Card className={cn('flex flex-col h-full overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1', className)}>
      <CardHeader className="p-0">
        <Link href={`/products/${product.slug}`}>
          <div className="relative aspect-square">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-base font-bold leading-snug">
          <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm mt-1">{product.brand}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex-col items-start">
        <p className="text-lg font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
