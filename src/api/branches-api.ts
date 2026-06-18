import axiosInstance from "./axiosInstance";
import type { BranchTypes } from "../types";

export const newBranchesApi = async (values: BranchTypes) => {
  try {
    const response = await axiosInstance.post("/branches", values);
    return response.data;
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw error;
  }
};
export const GetBranchesApi = async (restaurantId: string) => {
  const response = await axiosInstance.get(`/branches/${restaurantId}`);
  return response.data.data;
};
export const DeleteBranchApi = async (id: string) => {
  const response = await axiosInstance.delete(`/branches/${id}`);
  return response.data;
};
export const UpdateBranchApi = async (values: BranchTypes) => {
  try {
    const response = await axiosInstance.patch("/branches", values);
    return response.data;
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw error;
  }
};
