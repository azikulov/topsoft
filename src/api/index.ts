import axios from 'axios';
import type { Key, Order, Product } from '@/types';
import type {
  CreateKeys,
  CreateOrder,
  CreateTrashKeys,
  DeleteKey,
  DeleteTrashKey,
  GetKeys,
  UpdatedProduct,
} from './types';

const api = axios.create({
  // baseURL: import.meta.env.DEV ? 'http://localhost:3000/' : 'https://topsoft-server.onrender.com/',
  baseURL: 'https://necesse.serveo.net/',
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

export async function createKey(keys: Key[]): CreateKeys {
  try {
    const response = await api.post(`/api/keys`, keys);

    if (response.status === 201) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:createKey`);
    console.log(e);
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

export async function updateKey(id: number, status: string) {
  try {
    const response = await api.put(`api/keys/${id}`, { status });
    console.log('Update');
    if (response.status === 201) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:updateKey`);
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

export async function createTrashKey(keys: Key[]): CreateTrashKeys {
  try {
    const response = await api.post(`/api/trash-keys`, keys);

    if (response.status === 201) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:createTrashKey`);
    console.log(e);
  }
}

export async function updateTrashKey(id: number, status: string) {
  try {
    const response = await api.put(`api/trash-keys/${id}`, { status });

    if (response.status === 201) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:updateTrashKey`);
  }
}

export async function getTrashKeys(): GetKeys {
  try {
    const response = await api.get(`api/trash-keys`);

    if (response.status === 200) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:getTrashKeys`);
  }
}

export async function deleteTrashKey(id: number): DeleteTrashKey {
  try {
    const response = await api.delete(`api/trash-keys/${id}`);

    if (response.status === 200)
      return { message: 'The trash key successfully deleted!', trashKeys: response.data.trashKeys };
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:deleteTrashKey`);

    return {
      message: 'An error has occurred!',
    };
  }
}

export async function getOrders(): Promise<Order[] | void> {
  try {
    const response = await api.get('api/orders');

    if (response.status === 200) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:getOrders`);
  }
}

export async function createOrder(order: Omit<Order, 'id'>): CreateOrder {
  try {
    const response = await api.post(`/api/orders`, order);

    if (response.status === 201) return response.data;
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:createOrder`);
    console.log(e);
  }
}

export async function sendMail(mail: { to: string; text: string; html: string; subject: string }) {
  try {
    const response = await api.post(`api/sendmail`, mail);

    if (response.status === 200) return { message: 'Mail sent successfully!', mail };
  } catch (e) {
    console.log(`An error has occurred!\nPath: src/api/index.ts:sendMail`);

    return {
      message: 'An error has occurred!',
    };
  }
}
