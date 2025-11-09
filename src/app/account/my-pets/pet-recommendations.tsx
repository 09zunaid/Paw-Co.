'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import type { PetProfile, ProductRecommendation } from '@/ai/flows/recommend-products-for-pet';
import { recommendProductsForPet } from '@/ai/flows/recommend-products-for-pet';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Pet } from '@/types';

const formSchema = z.object({
  name: z.string().min(1, 'Pet name is required'),
  breed: z.string().min(1, 'Breed is required'),
  age: z.coerce.number().min(0, 'Age must be a positive number'),
  weight: z.coerce.number().min(0, 'Weight must be a positive number'),
  allergies: z.string().optional(),
});

interface PetRecommendationsProps {
    petProfile?: Pet;
}

export function PetRecommendations({ petProfile }: PetRecommendationsProps) {
  const [open, setOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<ProductRecommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: petProfile?.name ?? '',
      breed: petProfile?.breed ?? '',
      age: petProfile?.age ?? 0,
      weight: petProfile?.weight ?? 0,
      allergies: petProfile?.allergies ?? '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendations([]);
    try {
      const result = await recommendProductsForPet(values as PetProfile);
      setRecommendations(result);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to get recommendations. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const triggerText = petProfile ? "Find Perfect Products" : "Add New Pet";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={petProfile ? 'w-full' : ''}>
          <Wand2 className="mr-2 h-4 w-4" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">
            {petProfile ? `Recommendations for ${petProfile.name}` : 'Create a Pet Profile'}
          </DialogTitle>
          <DialogDescription>
            {petProfile ? 'Our AI has found these products just for your pet.' : 'Fill in your pet\'s details to get personalized product recommendations.'}
          </DialogDescription>
        </DialogHeader>
        
        {recommendations.length > 0 ? (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto p-1">
                {recommendations.map((rec) => (
                    <Card key={rec.productName}>
                        <CardHeader>
                            <CardTitle>{rec.productName}</CardTitle>
                            <CardDescription>{rec.productDescription}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-semibold text-primary">Why it's a great match:</p>
                            <p className="text-sm text-muted-foreground">{rec.suitabilityReason}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet's Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Buddy" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="breed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Breed</FormLabel>
                    <FormControl>
                      <Input placeholder="Golden Retriever" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age (years)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (lbs)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="75" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="allergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Allergies (comma-separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Chicken, Dust Mites" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <DialogFooter>
                <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Recommendations...
                    </>
                ) : (
                    <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Get Recommendations
                    </>
                )}
                </Button>
            </DialogFooter>
          </form>
        </Form>
        )}

        {recommendations.length > 0 && (
             <DialogFooter>
                <Button onClick={() => { setRecommendations([]); if(!petProfile) form.reset() } }>
                    {petProfile ? "Find More" : "Add Another Pet"}
                </Button>
            </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
