export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: 'food' | 'toys' | 'supplies';
  petType: ('dog' | 'cat' | 'small-animal' | 'bird')[];
  lifeStage: ('puppy' | 'adult' | 'senior')[];
  specialDiet?: ('grain-free' | 'limited-ingredient')[];
  healthBenefit?: ('dental' | 'joint' | 'skin' | 'anxiety')[];
  perfectFor: string[];
  imageId: string;
  images: string[];
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  imageId: string;
  author: string;
  date: string;
};

export type Pet = {
  id: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  allergies: string;
  imageId: string;
};
