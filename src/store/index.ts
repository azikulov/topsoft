/* eslint-disable no-unused-vars */

import { create } from 'zustand';
import type { Product } from '@/types';

interface ProductsState {
  products: Product[];
  saveProducts: (products: Product[]) => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  saveProducts: (products) =>
    set((state) => {
      return { ...state, products };
    }),
}));
