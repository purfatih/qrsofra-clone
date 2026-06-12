import { Autocomplete, Checkbox, TextField } from "@mui/material";

type AutocompleteWrapperProps<T> = {
  options: T[];
  value: T[];
  onChange: (event: any, value: T[]) => void;
  getOptionLabel: (option: T) => string;
  onBlur?: () => void;
  error?: boolean;
  helperText?: string | string[];
  label?: string;
  renderInput?: (params: any) => React.ReactNode;
};
type AutocompleteCompProps<T> = AutocompleteWrapperProps<T> & {};
function AutocompleteComp<T>(props: AutocompleteCompProps<T>) {
  const {
    options,
    value,
    onChange,
    getOptionLabel,
    onBlur,
    error,
    helperText,
    label,
  } = props;
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      options={options}
      getOptionLabel={getOptionLabel}
      value={value}
      onChange={onChange}
      renderOption={({ key, ...props }, option, { selected }) => {
        return (
          <li key={key} {...props}>
            <Checkbox
              checked={selected}
              sx={{ color: "#637381", "&.Mui-checked": { color: "#1C252E" } }}
            />
            {getOptionLabel(option)}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          helperText={helperText}
          label={label}
        />
      )}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "12px",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
            mt: 0.5,
          },
        },
      }}
      onBlur={onBlur}
    />
  );
}

export default AutocompleteComp;
