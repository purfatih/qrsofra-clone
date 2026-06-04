import "./App.css";
import RegisterPage from "./pages/register/RegisterPage";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RegisterPage />
    </ThemeProvider>
  );
}

export default App;
