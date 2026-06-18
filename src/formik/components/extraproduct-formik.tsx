import { useFormik } from "formik";
import { ExtraProductValidationSchema } from "../validation/validationSchema";
import type { ExtraProductTypes, ExtraProductFormValues } from "../../types";
import { ExtraProductsApi } from "../../api/products-api";
import { useDataContext } from "../../context/data/data-context";

export const useExtraProductFormik = (onSuccess?: () => void) => {
  const { restaurantId, setExtraProducts } = useDataContext();
  const extraProductFormik = useFormik<ExtraProductFormValues>({
    enableReinitialize: true,
    initialValues: {
      name: "",
      price: "",
      restaurantId: restaurantId,
      status: "ACTIVE",
    },

    onSubmit: async (values: ExtraProductFormValues) => {
      try {
        const payload: ExtraProductTypes = {
          ...values,
          price: values.price ? Number(values.price) : 0,
        };
        const data = await ExtraProductsApi(payload);
        setExtraProducts((prev) => [...prev, data]);
        onSuccess?.();
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error message:", error.message);
        } else {
          console.error("Unknown error:", error);
        }
        throw error;
      }
    },
    validationSchema: ExtraProductValidationSchema,
  });

  return extraProductFormik;
};
