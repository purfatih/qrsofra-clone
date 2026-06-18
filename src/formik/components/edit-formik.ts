import { useFormik } from "formik";
import {
  BranchValidationSchema,
  CategoryValidationSchema,
  ExtraProductValidationSchema,
  ProductValidationSchema,
} from "../validation/validationSchema";
import { UpdateBranchApi } from "../../api/branches-api";
import type {
  BranchTypes,
  CategoryTypes,
  ExtraProductTypes,
  ProductFormTypes,
} from "../../types";
import { useNavigate } from "react-router";
import { UpdateCategoryApi } from "../../api/category-api";

import {
  UpdateExtraProductApi,
  UpdateProductApi,
} from "../../api/products-api";
import { useDataContext } from "../../context/data/data-context";

export const useBranchEditFormik = (id?: string) => {
  const navigate = useNavigate();
  const { branches } = useDataContext();
  const branch = branches?.find((c) => c._id === id);
  const branchEditFormik = useFormik<BranchTypes>({
    enableReinitialize: true,
    initialValues: {
      _id: id,
      name: branch?.name || "",
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
  const { categories } = useDataContext();
  const category = categories?.find((c) => c._id === id);

  const navigate = useNavigate();
  const categoryEditFormik = useFormik<CategoryTypes>({
    enableReinitialize: true,
    initialValues: {
      _id: id,
      name: category?.name || "",
      branchIds: category?.branchIds || [],
      restaurantId: category?.restaurantId || "",
      status: category?.status || "ACTIVE",
      image: "",
      branches: category?.branches || [],
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
export const useProductEditFormik = (id?: string) => {
  const { products } = useDataContext();
  const product = products?.find((c) => c._id === id);
  const navigate = useNavigate();
  const productEditFormik = useFormik<ProductFormTypes>({
    enableReinitialize: true,
    initialValues: {
      categories:
        product?.categories?.map((c) => (typeof c === "string" ? c : c._id!)) ||
        [], //
      name: product?.name || "",
      description: product?.description || "",
      price: product?.price || 0,
      branches:
        product?.branches?.map((b) => (typeof b === "string" ? b : b._id!)) ||
        [],
      extraProducts: product?.extraProducts || [],
      restaurantId: product?.restaurantId || "",
      status: product?.status || "ACTIVE",
      images: product?.images || [],
      userId: product?.userId || "",
      createdAt: product?.createdAt || "",
      updatedAt: product?.updatedAt || "",
      image: product?.image || "",
      imageFile: null,
      _id: product?._id || "",
    },

    onSubmit: async (values: ProductFormTypes) => {
      try {
        await UpdateProductApi(values);
        navigate("/dashboard/products/list");
      } catch (error: any) {
        throw error;
      }
    },
    validationSchema: ProductValidationSchema,
  });

  return productEditFormik;
};

export const useExtraProductEditFormik = (
  id?: string,
  onSuccess?: () => void,
) => {
  const { extraProducts } = useDataContext();
  const extraProduct = extraProducts?.find((c) => c?._id === id);
  const navigate = useNavigate();
  const extraProductEditFormik = useFormik<ExtraProductTypes>({
    enableReinitialize: true,
    initialValues: {
      _id: id,
      name: extraProduct?.name || "",
      price: extraProduct?.price || 0,
      restaurantId: extraProduct?.restaurantId || "",
      status: extraProduct?.status || "ACTIVE",
    },

    onSubmit: async (values: ExtraProductTypes) => {
      try {
        await UpdateExtraProductApi(values);
        navigate("/dashboard/products/list");
        onSuccess?.();
      } catch (error: any) {
        throw error;
      }
    },
    validationSchema: ExtraProductValidationSchema,
  });

  return extraProductEditFormik;
};
