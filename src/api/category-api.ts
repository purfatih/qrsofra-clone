import axiosInstance from "./axiosInstance";
import type { CategoryTypes } from "../types";

export const newCategoryApi = async (values: CategoryTypes) => {
  try {
    const response = await axiosInstance.post("/categories", values);
    return response.data;
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw error;
  }
};
export const GetCategoriesApi = async (restaurantId: string) => {
  const response = await axiosInstance.get(`/categories/${restaurantId}`);

  return response.data;
};
export const DeleteCategoryApi = async (id: string) => {
  const response = await axiosInstance.delete(`/categories/${id}`);
  return response.data;
};
export const UpdateCategoryApi = async (values: CategoryTypes) => {
  try {
    const response = await axiosInstance.patch("/categories", values);
    return response.data;
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw error;
  }
};
