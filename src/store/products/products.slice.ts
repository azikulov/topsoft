import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Product } from '@/types';

const initialState: { products: Product[] } = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { reducer, actions } = productsSlice;
