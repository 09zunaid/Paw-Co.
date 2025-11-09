import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { articles } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArticleCard } from '@/components/article-card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export default function BlogPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'blog-hero') ?? PlaceHolderImages[0];
  const featuredArticles = articles.slice(0, 3);
  const categories = [...new Set(articles.map(a => a.category))];

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        <div className="relative h-full flex flex-col justify-end items-start text-white p-6 md:p-12">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">
                    Pet Care Hub
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/90">
                    Explore our expert guides, tips, and advice for every stage of your pet's life.
                </p>
                <div className="relative mt-6 max-w-xl">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search articles..." className="pl-10 h-12 bg-white text-foreground" />
                    <Button className="absolute right-1 top-1/2 -translate-y-1/2 h-10">Search</Button>
                </div>
            </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex gap-2 overflow-x-auto pb-4">
            <Badge className="text-base px-4 py-2 cursor-pointer transition-colors hover:bg-primary/80">All Topics</Badge>
            {categories.map(cat => (
                <Badge key={cat} variant="secondary" className="text-base px-4 py-2 cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground">{cat}</Badge>
            ))}
        </div>
        
        <div className="mt-8">
            <h2 className="text-3xl font-headline font-bold mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {featuredArticles.map(article => <ArticleCard key={article.id} article={article} />)}
            </div>
        </div>
        
        <div className="mt-16">
            <h2 className="text-3xl font-headline font-bold mb-6">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => <ArticleCard key={article.id} article={article} />)}
            </div>
        </div>

        <div className="mt-16 bg-primary/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <h3 className="text-3xl font-headline font-bold text-primary">Get Pet Care Tips Delivered</h3>
                    <p className="text-muted-foreground mt-2">Join our community and get expert advice straight to your inbox.</p>
                </div>
                 <form className="flex w-full max-w-md mx-auto md:mx-0">
                    <Input type="email" placeholder="Enter your email" className="h-12 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 border-primary/20" />
                    <Button type="submit" size="lg" className="rounded-l-none">Subscribe</Button>
                </form>
            </div>
        </div>

      </section>
    </div>
  );
}
