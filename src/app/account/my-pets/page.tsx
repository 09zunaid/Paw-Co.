import Image from 'next/image';
import { pets } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PetRecommendations } from './pet-recommendations';

export default function MyPetsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">My Pets</h1>
        <PetRecommendations />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => {
          const image = PlaceHolderImages.find((img) => img.id === pet.imageId) ?? PlaceHolderImages[0];
          return (
            <Card key={pet.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{pet.name}</CardTitle>
                <CardDescription>{pet.breed}</CardDescription>
                <div className="text-sm text-muted-foreground mt-4 space-y-1">
                  <p><span className="font-semibold text-foreground">Age:</span> {pet.age} years</p>
                  <p><span className="font-semibold text-foreground">Weight:</span> {pet.weight} lbs</p>
                  <p><span className="font-semibold text-foreground">Allergies:</span> {pet.allergies}</p>
                </div>
                <div className="mt-6">
                  <PetRecommendations petProfile={pet} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
