import type { Key, Product } from '@/types';

export type UpdatedProduct<T> = Promise<
  | {
      message: string;
      updatedProduct: Product;
    }
  | T
>;

export type CreateKeys = Promise<{ message: string; keys: Key[] } | undefined>;

export type GetKeys = Promise<Key[] | undefined>;

export type DeleteKey = Promise<
  | {
      message: string;
      keys?: Key[];
    }
  | undefined
>;
