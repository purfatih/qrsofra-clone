import type { RegisterTypes } from "../../types";
import { useFormik, type FormikValues } from "formik";
import { RegisterApi } from "../../api/RegisterApi";
import validationSchema from "../validation/validationSchema";
export const useRegisterFormik = () => {
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
    validationSchema: validationSchema,
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
