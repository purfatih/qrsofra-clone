import axiosInstance from "./axiosInstance";
import type { LoginTypes } from "../types";

export const LoginApi = async (values: LoginTypes) => {
  try {
    const response = await axiosInstance.post("/auth/login", values);
    // LocalStorage'a token'ı kaydet
    localStorage.setItem("token", response.data.data.token);
    return response.data;
  } catch (error: any) {
    // Hata detaylarını logla
    console.error("Error response:", error.response.data);
    console.error("Error message:", error.message);
    throw error;
  }
};
