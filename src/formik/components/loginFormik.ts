import type { LoginTypes } from "../../types";
import { useFormik } from "formik";
import { LoginApi } from "../../api/LoginApi";
import { loginValidationSchema } from "../validation/validationSchema";
import { useNavigate } from "react-router";

export const useLoginFormik = () => {
  const navigate = useNavigate();
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
          navigate("/");
        } else {
          navigate("/login");
        }
      } catch (error: any) {
        console.error(error.response?.data?.message);
      }
    },
  });

  return loginFormik;
};
