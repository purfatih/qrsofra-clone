import { useFormik } from "formik";
import { CategoryValidationSchema } from "../validation/validationSchema";
import { newCategoryApi } from "../../api/category-api";
import type { CategoryTypes } from "../../types";
import { useNavigate } from "react-router";
import { useDataContext } from "../../context/data/data-context";

export const useNewCategoryFormik = () => {
  const { restaurantId } = useDataContext();
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
        await newCategoryApi(values);
        navigate("/dashboard/categories/list");
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
