import { Stack } from "@mui/material";
import DashboardSidebar from "../DashboardSidebar";
import RegisterForm from "./RegisterForm";

function RegisterDashboard() {
  return (
    <Stack sx={{ flexDirection: "row" }}>
      <DashboardSidebar />
      <RegisterForm />
    </Stack>
  );
}

export default RegisterDashboard;
