import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as productsReducer } from './products/products.slice';
import { reducer as keysReducer } from './keys/keys.slice';
import { reducer as discountProducts } from './discountProducts/discountProducts.slice';

const reducer = combineReducers({
  products: productsReducer,
  keys: keysReducer,
  discountProducts: discountProducts,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
