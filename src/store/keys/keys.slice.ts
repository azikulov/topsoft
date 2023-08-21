import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Key } from '@/types';

const initialState: Key[] = [];

export const keysSlice = createSlice({
  name: 'keys',
  initialState,
  reducers: {
    saveKeys: (state, { payload }: PayloadAction<Key[]>) => {
      const products = [...new Set(payload)];
      return products;
    },
  },
});

export const { reducer, actions } = keysSlice;
