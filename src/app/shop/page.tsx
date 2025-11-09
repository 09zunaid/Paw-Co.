import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function ShopPage() {
  const filters = {
    petType: ['Dogs', 'Cats', 'Small Animals', 'Birds'],
    brand: ['Paw & Co. Naturals', 'ChewGuard', 'Leathertail', 'ComfyCat', 'OceanFeast'],
    lifeStage: ['Puppy/Kitten', 'Adult', 'Senior'],
    specialDiet: ['Grain-Free', 'Limited Ingredient'],
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-2xl font-headline font-bold mb-6">Filters</h2>
            <Accordion type="multiple" defaultValue={['petType', 'brand']} className="w-full">
              <AccordionItem value="petType">
                <AccordionTrigger className="font-bold">Pet Type</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {filters.petType.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`filter-pet-${type}`} />
                        <Label htmlFor={`filter-pet-${type}`} className="font-normal">{type}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="brand">
                <AccordionTrigger className="font-bold">Brand</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {filters.brand.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`filter-brand-${brand}`} />
                        <Label htmlFor={`filter-brand-${brand}`} className="font-normal">{brand}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="lifeStage">
                <AccordionTrigger className="font-bold">Life Stage</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {filters.lifeStage.map((stage) => (
                      <div key={stage} className="flex items-center space-x-2">
                        <Checkbox id={`filter-stage-${stage}`} />
                        <Label htmlFor={`filter-stage-${stage}`} className="font-normal">{stage}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="specialDiet">
                <AccordionTrigger className="font-bold">Special Diet</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {filters.specialDiet.map((diet) => (
                      <div key={diet} className="flex items-center space-x-2">
                        <Checkbox id={`filter-diet-${diet}`} />
                        <Label htmlFor={`filter-diet-${diet}`} className="font-normal">{diet}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </aside>

        <main className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">All Products</h1>
            <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      </div>
    </div>
  );
}
