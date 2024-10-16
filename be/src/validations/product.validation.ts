import { z } from 'zod';

const energyClassSchema = z.enum(['A', 'B', 'C']);
const capacitySchema = z.enum(['8', '9', '10.5']);
const sortSchema = z.enum(['price', 'capacity']);
const featuresSchema = z.enum(['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny']);

const productFiltersSchema = z.object({
  sort: sortSchema.optional(),
  capacity: capacitySchema.optional(),
  energyClass: energyClassSchema.optional(),
  features: featuresSchema.optional(),
  code: z.string().optional(),
});

export const validateProductFilters = (data: unknown) => {
  return productFiltersSchema.safeParse(data);
};
