import axiosInstance from "./axiosInstance";
import type { RestaurantCreateTypes } from "../types";

export const RestaurantCreateApi = async (values: RestaurantCreateTypes) => {
  try {
    const response = await axiosInstance.post("/restaurants", values);

    return response.data;
  } catch (error: any) {
    console.error("Error response:", error.response.data);
    console.error("Error message:", error.message);

    throw error;
  }
};
export const GetRestaurantApi = async () => {
  try {
    const response = await axiosInstance.get("/restaurants");

    return response.data;
  } catch (error: any) {
    console.error("Error response:", error.response.data);
    console.error("Error message:", error.message);

    throw error;
  }
};
export const UploadLogoApi = async (images: File) => {
  const formData = new FormData();
  formData.append("images", images);
  const response = await axiosInstance.post("/file/upload", formData);

  console.log(response.data);

  return response.data;
};
