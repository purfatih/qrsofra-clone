import { useFormik } from "formik";
import { CategoryValidationSchema } from "../validation/validationSchema";
import { newCategoryApi } from "../../api/category-api";
import type { CategoryTypes } from "../../types";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context/Context";

export const useNewCategoryFormik = () => {
  const { restaurantId } = useGlobalContext();
  const navigate = useNavigate();
  const newCategoryFormik = useFormik<CategoryTypes>({
    enableReinitialize: true,
    initialValues: {
      name: "",
      branchIds: [],
      restaurantId: restaurantId,
      status: "ACTIVE",
      image: "",
      branches: [],
    },

    onSubmit: async (values: CategoryTypes) => {
      try {
        const response = await newCategoryApi(values);
        navigate("/dashboard/categories/list");
        return response;
      } catch (error: any) {
        console.error("Error response:", error.response);
        console.error("Error message:", error.message);
        throw error;
      }
    },
    validationSchema: CategoryValidationSchema,
  });

  return newCategoryFormik;
};
