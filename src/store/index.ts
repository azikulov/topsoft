import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as productsReducer } from './products/products.slice';
import { reducer as keysReducer } from './keys/keys.slice';

const reducer = combineReducers({
  products: productsReducer,
  keys: keysReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
