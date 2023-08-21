import type { Product } from '@/types';

export type UpdatedProduct<T> = Promise<
  | {
      message: string;
      updatedProduct: Product;
    }
  | T
>;
