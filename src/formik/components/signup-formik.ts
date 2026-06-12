import type { RegisterTypes } from "../../types";
import { useFormik, type FormikValues } from "formik";
import { RegisterApi } from "../../api/register-api";
import { registerValidationSchema } from "../validation/validationSchema";
import { useNavigate } from "react-router";
export const useRegisterFormik = () => {
  const navigate = useNavigate();
  const RegisterFormik: FormikValues = useFormik<RegisterTypes>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      analyticsConsent: false,
      marketingConsent: false,
      policiesAccepted: false,
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      try {
        const data = await RegisterApi(values);
        navigate("/dashboard");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return RegisterFormik;
};
