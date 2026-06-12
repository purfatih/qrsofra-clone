import { useFormik } from "formik";
import {
  BranchValidationSchema,
  CategoryValidationSchema,
} from "../validation/validationSchema";
import { UpdateBranchApi } from "../../api/branches-api";
import type { BranchTypes, CategoryTypes } from "../../types";
import { useNavigate } from "react-router";
import { GetCategoriesApi, UpdateCategoryApi } from "../../api/category-api";
import { useGlobalContext } from "../../context/Context";
import { useEffect, useState } from "react";

export const useBranchEditFormik = (id?: string) => {
  const navigate = useNavigate();
  const branchEditFormik = useFormik<BranchTypes>({
    enableReinitialize: true,
    initialValues: {
      _id: id,
      name: "",
    },

    onSubmit: async (values: BranchTypes) => {
      try {
        await UpdateBranchApi(values);
        navigate("/dashboard/branches/list");
      } catch (error: any) {
        throw error;
      }
    },
    validationSchema: BranchValidationSchema,
  });

  return branchEditFormik;
};
export const useCategoryEditFormik = (id?: string) => {
  const { categories } = useGlobalContext();
  const category = categories.find((c) => c._id === id);

  const navigate = useNavigate();
  const categoryEditFormik = useFormik<CategoryTypes>({
    enableReinitialize: true,
    initialValues: {
      _id: id,
      name: category?.name || "",
      branchIds: category?.branchIds || [],
      restaurantId: category?.restaurantId || "",
      status: category?.status || "ACTIVE",
    },

    onSubmit: async (values: CategoryTypes) => {
      try {
        await UpdateCategoryApi(values);
        navigate("/dashboard/categories/list");
      } catch (error: any) {
        throw error;
      }
    },
    validationSchema: CategoryValidationSchema,
  });

  return categoryEditFormik;
};
