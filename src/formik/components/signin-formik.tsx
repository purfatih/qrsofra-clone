import type { LoginTypes } from "../../types";
import { useFormik } from "formik";
import { LoginApi } from "../../api/login-api";
import { loginValidationSchema } from "../validation/validationSchema";
import { useNavigate } from "react-router";
import { useDataContext } from "../../context/data/data-context";
import { useStateContext } from "../../context/state/state-context";

export const useLoginFormik = () => {
  const navigate = useNavigate();
  const { fetchRestaurants } = useDataContext();
  const { setLoginErrorResponseData } = useStateContext();
  const loginFormik = useFormik<LoginTypes>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,

    onSubmit: async (values) => {
      try {
        const response = await LoginApi(values);
        const token = response?.data?.token;
        if (token) {
          localStorage.setItem("token", token);
          setLoginErrorResponseData({
            success: true,
            message: "",
          });
          await fetchRestaurants();
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
      } catch (error: any) {
        setLoginErrorResponseData({
          success: false,
          message: error.response.data.message,
        });
      }
    },
  });

  return loginFormik;
};
