import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Product } from '@/types';

const initialState: Product[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveProducts: (state, { payload }: PayloadAction<Product[]>) => {
      const products = [...new Set(payload)];
      return products;
    },
  },
});

export const { reducer, actions } = productsSlice;
