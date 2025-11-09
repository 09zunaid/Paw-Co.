'use server';
/**
 * @fileOverview This file defines a Genkit flow for recommending products based on a pet's profile.
 *
 * recommendProductsForPet - A function that takes a pet profile as input and returns a list of product recommendations.
 * PetProfile - The input type for the recommendProductsForPet function.
 * ProductRecommendation - The output type for the recommendProductsForPet function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PetProfileSchema = z.object({
  name: z.string().describe("The pet's name."),
  breed: z.string().describe("The pet's breed."),
  age: z.number().describe("The pet's age in years."),
  weight: z.number().describe("The pet's weight in pounds."),
  allergies: z.string().describe("A comma-separated list of the pet's allergies.").optional(),
});
export type PetProfile = z.infer<typeof PetProfileSchema>;

const ProductRecommendationSchema = z.object({
  productName: z.string().describe('The name of the recommended product.'),
  productDescription: z.string().describe('A brief description of the product.'),
  suitabilityReason: z.string().describe('Why this product is suitable for the pet based on their profile.'),
});
export type ProductRecommendation = z.infer<typeof ProductRecommendationSchema>;

const ProductRecommendationsSchema = z.array(ProductRecommendationSchema);
export type ProductRecommendations = z.infer<typeof ProductRecommendationsSchema>;

export async function recommendProductsForPet(petProfile: PetProfile): Promise<ProductRecommendations> {
  return recommendProductsForPetFlow(petProfile);
}

const prompt = ai.definePrompt({
  name: 'recommendProductsForPetPrompt',
  input: {schema: PetProfileSchema},
  output: {schema: ProductRecommendationsSchema},
  prompt: `You are a pet product expert. Given the following pet profile, recommend 3 products that would be suitable for them. Explain why you selected each product based on the pet's profile.

Pet Name: {{{name}}}
Pet Breed: {{{breed}}}
Pet Age: {{{age}}}
Pet Weight: {{{weight}}}
Pet Allergies: {{{allergies}}}

Format your response as a JSON array of product recommendations. Each product should have the following fields:
- productName: The name of the product.
- productDescription: A brief description of the product.
- suitabilityReason: Why this product is suitable for the pet based on their profile.
`,
});

const recommendProductsForPetFlow = ai.defineFlow(
  {
    name: 'recommendProductsForPetFlow',
    inputSchema: PetProfileSchema,
    outputSchema: ProductRecommendationsSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
