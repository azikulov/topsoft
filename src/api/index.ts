import { Product } from '@/types';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.TOPSOFT_API_URL || 'https://necesse.serveo.net/',
  timeout: 5000,
});

export async function getProducts(): Promise<Product[] | void> {
  try {
    const response = await api.get('api/products');

    if (response.status === 200) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts 10 line`);
  }
}

export async function updateProduct(id: number, updatedProduct: Partial<Product>) {
  return await api.put(`api/products/${id}`, updatedProduct);
}
