import axiosInstance from "./axiosInstance";
import type { RestaurantCreateTypes } from "../types";
import { useGlobalContext } from "../context/Context";
export const RestaurantCreateApi = async (values: RestaurantCreateTypes) => {
  /*  const formData = new FormData();
  formData.append("logo", values.logo);
  formData.append("name", values.name);
  formData.append("instagramName", values.instagramName || "");
  formData.append("description", values.description || "");
  formData.append("status", values.status);
  values.currencies.forEach((currency) => {
    formData.append("currencies", currency);
  });
 */
  try {
    const response = await axiosInstance.post("/restaurants", values, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error response:", error.response.data);
    console.error("Error message:", error.message);

    throw error;
  }
};
export const GetRestaurantApi = async () => {
  try {
    const response = await axiosInstance.get("/restaurants", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error response:", error.response.data);
    console.error("Error message:", error.message);
    throw error;
  }
};
/* export const UploadLogoApi = async (images: File) => {
  const formData = new FormData();
  formData.append("images", images);
  const response = await axiosInstance.post("/file/upload", formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response.data);

  return response.data;
};
 */
