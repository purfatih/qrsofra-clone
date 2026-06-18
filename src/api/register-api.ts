import axiosInstance from "./axiosInstance";
import type { RegisterTypes } from "../types";

export const RegisterApi = async (values: RegisterTypes) => {
  try {
    const response = await axiosInstance.post("/auth/register", values);
    localStorage.setItem("token", response.data.data.token);

    return response.data;
  } catch (error: any) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw error;
  }
};
