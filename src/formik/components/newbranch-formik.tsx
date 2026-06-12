import { useFormik } from "formik";
import { BranchValidationSchema } from "../validation/validationSchema";
import { newBranchesApi } from "../../api/branches-api";
import type { BranchTypes } from "../../types";
import { useGlobalContext } from "../../context/Context";
import { useNavigate } from "react-router";

export const useNewBranchFormik = () => {
  const navigate = useNavigate();
  const { restaurantId } = useGlobalContext();
  const newBranchFormik = useFormik<BranchTypes>({
    enableReinitialize: true,
    initialValues: {
      name: "",
      restaurantId: restaurantId,
      status: "ACTIVE",
    },

    onSubmit: async (values: BranchTypes) => {
      try {
        const response = await newBranchesApi(values);
        console.log(response);
        navigate("/dashboard/branches/list");
      } catch (error: any) {
        console.error("Error response:", error.response);
        console.error("Error message:", error.message);
        throw error;
      }
    },
    validationSchema: BranchValidationSchema,
  });

  return newBranchFormik;
};
