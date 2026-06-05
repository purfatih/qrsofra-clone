import { Box, Stack } from "@mui/material";
import DashboardSidebar from "../DashboardSidebar";
import LoginForm from "./LoginForm";

function LoginDashboard() {
  return (
    <Stack sx={{ flexDirection: "row" }}>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
          },
        }}
      >
        <DashboardSidebar />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          pt: "96px",
        }}
      >
        <LoginForm />
      </Box>
    </Stack>
  );
}

export default LoginDashboard;
