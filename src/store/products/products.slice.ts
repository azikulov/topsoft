import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Product } from '@/types';

const initialState: Product[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveProducts: (state, action: PayloadAction<Product[]>) => {
      const products = new Set(action.payload);
      state.push(...products);
    },
  },
});

export const { reducer, actions } = productsSlice;
