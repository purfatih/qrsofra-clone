import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            height: "56px",
            borderRadius: "12px",
            backgroundColor: "#ffffff",
            "&.Mui-focused fieldset": {
              borderColor: "#1C252E",
              borderWidth: "2px",
            },
            "& .Mui-focused ": {
              color: "#1C252E",
            },
            "&:hover fieldset": {
              borderColor: "#1C252E",
            },
          },
        },
      },
    },
  },
});

export default theme;
