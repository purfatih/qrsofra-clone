import axiosInstance from "./axiosInstance";
import type {
  ExtraProductTypes,
  ProductFormTypes,
  ProductTypes,
} from "../types";

type GenericApiType<T> = {
  data: T;
  status: string;
  message: string;
};

export const NewProductsApi = async (
  values: ProductFormTypes | ProductTypes,
) => {
  try {
    const response = await axiosInstance.post("/products", values);
    return response.data;
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw error;
  }
};
export const GetProductsApi = async (restaurantId: string) => {
  try {
    const response = await axiosInstance.get(`/products/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw error;
  }
};
export const DeleteProductApi = async (id: string) => {
  const response = await axiosInstance.delete(`/products/${id}`);
  return response.data;
};
export const UpdateProductApi = async (values: ProductFormTypes) => {
  try {
    const response = await axiosInstance.patch("/products", values);
    return response.data;
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw error;
  }
};
export const UploadProductImageApi = async (images: File) => {
  const formData = new FormData();
  formData.append("images", images);
  const response = await axiosInstance.post("/file/upload", formData);

  console.log(response.data);

  return response.data;
};

////////////////////////////////////////////////////////////////////////////

//extra products api

////////////////////////////////////////////////////////////////////////////

export const ExtraProductsApi = async (values: ExtraProductTypes) => {
  try {
    const response = await axiosInstance.post<
      GenericApiType<ExtraProductTypes>
    >("/extra-products", values);
    return response.data.data;
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw error;
  }
};

export const GetExtraProductsApi = async (restaurantId: string) => {
  try {
    const response = await axiosInstance.get(`/extra-products/${restaurantId}`);

    return response.data.data;
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw error;
  }
};
export const DeleteExtraProductApi = async (id: string) => {
  const response = await axiosInstance.delete(`/extra-products/${id}`);
  return response.data;
};
export const UpdateExtraProductApi = async (values: ExtraProductTypes) => {
  const response = await axiosInstance.patch(`/extra-products`, values);
  return response.data;
};
