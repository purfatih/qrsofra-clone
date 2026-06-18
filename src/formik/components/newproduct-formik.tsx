import { useFormik } from "formik";
import { ProductValidationSchema } from "../validation/validationSchema";
import type { ProductFormTypes, ProductTypes } from "../../types";
import { useNavigate } from "react-router";
import { NewProductsApi } from "../../api/products-api";
import { useDataContext } from "../../context/data/data-context";

export const useNewProductFormik = () => {
  const { restaurantId, setProducts } = useDataContext();
  const navigate = useNavigate();
  const newProductFormik = useFormik<ProductFormTypes>({
    enableReinitialize: true,
    initialValues: {
      name: "",
      branches: [],
      categories: [],
      extraProducts: [],
      restaurantId: restaurantId,
      status: "ACTIVE",
      description: "",
      price: 0,
      images: [],
      userId: "",
      createdAt: "",
      updatedAt: "",
      image: "",
      imageFile: null,
      _id: "",
    },

    onSubmit: async (values: ProductFormTypes | ProductTypes) => {
      try {
        const response = await NewProductsApi(values);
        navigate("/dashboard/products/list");
        setProducts((prev) => [...prev, response.data.data as ProductTypes]);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error message:", error.message);
        } else {
          console.error("Unknown error:", error);
        }
        throw error;
      }
    },
    validationSchema: ProductValidationSchema,
  });

  return newProductFormik;
};
