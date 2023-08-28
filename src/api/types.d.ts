import type { Key, Order, Product } from '@/types';

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

export type CreateTrashKeys = Promise<{ message: string; trashKeys: Key[] } | undefined>;

export type CreateOrder = Promise<{ message: string; orders: Order[] } | undefined>;

export type GetKeys = Promise<Key[] | undefined>;

export type DeleteTrashKey = Promise<
  | {
      message: string;
      trashKeys?: Key[];
    }
  | undefined
>;
