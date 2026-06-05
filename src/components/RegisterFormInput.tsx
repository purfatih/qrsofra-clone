import { TextField } from "@mui/material";
import { Formik } from "formik";

import { useRegisterFormik } from "../formik/registerFormik";

type Props = {
  name: string;
  label: string;
  variant: "outlined" | "filled" | "standard";
  type: string;
  fullWidth?: boolean;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function RegisterFormInput({
  name,
  label,
  variant,
  type,
  fullWidth,
  value,
  placeholder,
  onChange,
}: Props) {
  const formik = useRegisterFormik();
  return (
    <Formik
      initialValues={formik.initialValues}
      onSubmit={() => {
        formik.handleSubmit;
      }}
    >
      <TextField
        name={name}
        label={label}
        variant={variant}
        type={type}
        fullWidth={fullWidth}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Formik>
  );
}

export default RegisterFormInput;
