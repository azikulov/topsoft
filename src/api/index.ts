import axios from 'axios';
import type { Key, Product } from '@/types';
import type { CreateKeys, DeleteKey, GetKeys, UpdatedProduct } from './types';

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

    if (response.status === 201) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:updateProduct`);
  }
}

export async function createKey(keys: Key[]): CreateKeys {
  try {
    const response = await api.post(`/api/keys`, keys);

    if (response.status === 201) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:createKey`);
    console.log(e);
  }
}

export async function getKeys(): GetKeys {
  try {
    const response = await api.get(`api/keys`);

    if (response.status === 200) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:getKeys`);
  }
}

export async function deleteKey(id: number): DeleteKey {
  try {
    const response = await api.delete(`api/keys/${id}`);

    if (response.status === 200)
      return { message: 'The key successfully deleted!', keys: response.data.keys };
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:deleteKey`);

    return {
      message: 'An error has occurred!',
    };
  }
}
