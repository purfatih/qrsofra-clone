import type { RegisterTypes } from "../types";
import { useFormik } from "formik";
import { RegisterApi } from "../api/RegisterApi";
export const useRegisterFormik = () => {
  const RegisterFormik = useFormik<RegisterTypes>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      analyticsConsent: true,
      marketingConsent: true,
      policiesAccepted: true,
    },
    onSubmit: async (values) => {
      try {
        const data = await RegisterApi(values);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return RegisterFormik;
};
