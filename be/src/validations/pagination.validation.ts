import { isNumber } from '@/utils/is-number';
import z from 'zod';

const paginationSchema = z.object({
  page: z
    .string()
    .optional()
    .refine((val) => isNumber(val), {
      message: 'Page must be a positive number.',
    }),
  limit: z
    .string()
    .optional()
    .refine((val) => isNumber(val), {
      message: 'Limit must be a positive number.',
    }),
});

export const validatePagination = (data: unknown) => {
  return paginationSchema.safeParse(data);
};
