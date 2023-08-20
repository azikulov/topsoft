import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as productsReducer } from './products/products.slice';

const reducer = combineReducers({
  products: productsReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
