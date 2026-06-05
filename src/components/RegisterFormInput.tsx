import { TextField } from "@mui/material";
import { Formik } from "formik";

import { useRegisterFormik } from "../formik/components/registerFormik";

type Props = {
  name: string;
  label: string;
  variant: "outlined" | "filled" | "standard";
  type: string;
  fullWidth?: boolean;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
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
  error,
  helperText,
}: Props) {
  return (
    <TextField
      name={name}
      label={label}
      variant={variant}
      type={type}
      fullWidth={fullWidth}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  );
}

export default RegisterFormInput;
