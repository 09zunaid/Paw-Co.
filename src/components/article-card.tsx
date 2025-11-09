import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === article.imageId) ?? PlaceHolderImages[0];

  return (
    <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <Link href={`/blog/${article.slug}`}>
            <div className="relative aspect-video">
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
      <CardContent className="p-6 flex-grow">
        <Badge variant="outline" className="mb-2">{article.category}</Badge>
        <CardTitle className="text-xl font-headline font-bold leading-tight">
          <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
            {article.title}
          </Link>
        </CardTitle>
        <CardDescription className="mt-2 line-clamp-3">{article.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/blog/${article.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
