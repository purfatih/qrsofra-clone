import axiosInstance from './axiosInstance';
import type { ProductTypes } from '../types';

export const NewProductsApi = async (values: ProductTypes) => {
  try {
    const response = await axiosInstance.post('/products', values);
    return response.data;
  } catch (error) {
    console.error('Error response:', error.response);
    console.error('Error message:', error.message);
    throw error;
  }
};
export const GetProductsApi = async (restaurantId: string) => {
  try {
    const response = await axiosInstance.get(`/products/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error('Error response:', error.response);
    console.error('Error message:', error.message);
    throw error;
  }
};
export const DeleteProductApi = async (id: string) => {
  const response = await axiosInstance.delete(`/products/${id}`);
  return response.data;
};
export const UpdateProductApi = async (values: ProductTypes) => {
  try {
    const response = await axiosInstance.patch('/products', values);
    return response.data;
  } catch (error) {
    console.error('Error response:', error.response);
    console.error('Error message:', error.message);
    throw error;
  }
};
