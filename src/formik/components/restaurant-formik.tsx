import { useFormik } from "formik";
import { restaurantCreateValidationSchema } from "../validation/validationSchema";
import type { RestaurantCreateTypes } from "../../types";
import { RestaurantCreateApi } from "../../api/restaurant-api";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context/Context";
import axiosInstance from "../../api/axiosInstance";

export const useRestaurantCreateFormik = () => {
  const { setShowRestaurantData } = useGlobalContext();
  const navigate = useNavigate();
  const restaurantFormik = useFormik<RestaurantCreateTypes>({
    initialValues: {
      name: "",
      instagramName: "",
      description: "",
      currencies: ["TRY", "USD"],
      status: "ACTIVE",
      logo: "",
      logoFile: null,
    },

    onSubmit: async (values) => {
      try {
        if (values.logoFile) {
          const formData = new FormData();
          formData.append("images", values.logoFile);
          const response = await axiosInstance.post("/file/upload", formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
          });
          const logoUrl = response.data.data;
          await restaurantFormik.setFieldValue("logo", logoUrl);
        }

        const response = await RestaurantCreateApi(values);
        setShowRestaurantData(response.data.data);
        navigate("/dashboard");
      } catch (error: any) {
        console.log(error.response.data.message);
      }
    },
    validationSchema: restaurantCreateValidationSchema,
  });
  return restaurantFormik;
};
