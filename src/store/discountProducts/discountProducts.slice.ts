import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Product } from '@/types';

const initialState: Product[] = [];

export const discountProductsSlice = createSlice({
  name: 'discountProducts',
  initialState,
  reducers: {
    saveDiscountProducts: (_, { payload }: PayloadAction<Product[]>) => {
      const discountProducts = [...new Set(payload)];
      return discountProducts;
    },
  },
});

export const { reducer, actions } = discountProductsSlice;
