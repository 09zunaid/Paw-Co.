'use server';
/**
 * @fileOverview An AI agent that tags products with 'Paw-fect For' attributes.
 *
 * - tagProductsWithPerfectFor - A function that handles the product tagging process.
 * - TagProductsInput - The input type for the tagProductsWithPerfectFor function.
 * - TagProductsOutput - The return type for the tagProductsWithPerfectFor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TagProductsInputSchema = z.object({
  productName: z.string().describe('The name of the product to tag.'),
  productDescription: z.string().describe('The detailed description of the product.'),
  productIngredients: z.string().describe('The ingredients of the product.'),
});
export type TagProductsInput = z.infer<typeof TagProductsInputSchema>;

const TagProductsOutputSchema = z.object({
  tags: z.array(
    z.string().describe('The list of "Paw-fect For" tags applicable to the product.')
  ).describe('A list of tags identifying what the product is best suited for.')
});
export type TagProductsOutput = z.infer<typeof TagProductsOutputSchema>;

export async function tagProductsWithPerfectFor(input: TagProductsInput): Promise<TagProductsOutput> {
  return tagProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tagProductsPrompt',
  input: {schema: TagProductsInputSchema},
  output: {schema: TagProductsOutputSchema},
  prompt: `You are an expert product tagger for a pet supply store.

  Given the following product information, identify the tags from the list below that best describe the product's suitability.
  Return the results as a JSON array of strings.

  Available Tags:
  - For Senior Dogs
  - For Picky Eaters
  - For Large Breeds
  - For Small Breeds
  - For Active Dogs
  - For Indoor Cats
  - For Outdoor Cats
  - For Overweight Pets
  - For Pets with Allergies
  - For Puppies
  - For Kittens
  - For Pets with Dental Issues
  - For Pets with Joint Pain
  - For Anxious Pets

  Product Name: {{{productName}}}
  Product Description: {{{productDescription}}}
  Product Ingredients: {{{productIngredients}}}

  Output the tags as a JSON array of strings.
  `,
});

const tagProductsFlow = ai.defineFlow(
  {
    name: 'tagProductsFlow',
    inputSchema: TagProductsInputSchema,
    outputSchema: TagProductsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
