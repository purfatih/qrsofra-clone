import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontFamily: "Nunito Sans",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
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
