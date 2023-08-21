import axios from 'axios';
import type { Product } from '@/types';
import type { UpdatedProduct } from './types';

const api = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:3000/' : 'https://necesse.serveo.net/',
  timeout: 5000,
});

export async function getProducts(): Promise<Product[] | void> {
  try {
    const response = await api.get('api/products');

    if (response.status === 200) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:getProducts`);
  }
}

export async function updateProduct(
  id: number,
  updatedProduct: Partial<Product>
): UpdatedProduct<undefined> {
  try {
    const response = await api.put(`api/products/${id}`, updatedProduct);

    if (response.status === 200) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:updateProduct`);
  }
}
