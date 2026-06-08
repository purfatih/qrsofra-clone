import { TextField, type TextFieldProps } from "@mui/material";

type Props = TextFieldProps;

function FormInput(props: Props) {
  return <TextField {...props} />;
}

export default FormInput;
