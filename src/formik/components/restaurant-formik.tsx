import { useFormik } from "formik";
import { restaurantCreateValidationSchema } from "../validation/validationSchema";
import type { RestaurantCreateTypes } from "../../types";
import { RestaurantCreateApi, UploadLogoApi } from "../../api/restaurant-api";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context/Context";

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
        let logoUrl = "";
        if (values.logoFile) {
          const logoResponse = await UploadLogoApi(values.logoFile);
          logoUrl = `http://localhost:8080/uploads/${logoResponse.data}`;
        }

        const response = await RestaurantCreateApi({
          ...values,
          logo: logoUrl,
        });
        console.log("Restaurant response:", response);
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
