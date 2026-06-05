import { TextField, type TextFieldProps } from "@mui/material";

type Props = TextFieldProps;

function FormInput(props: Props) {
  const {
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
    onBlur,
    ...rest
  } = props;
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
      onBlur={onBlur}
      {...rest}
    />
  );
}

export default FormInput;
