import { Box, Stack } from "@mui/material";
import DashboardSidebar from "../DashboardSidebar";
import RegisterForm from "./RegisterForm";

function RegisterDashboard() {
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
        <RegisterForm />
      </Box>
    </Stack>
  );
}

export default RegisterDashboard;
