import { Outlet } from "react-router-dom";
import HomepageSidebar from "../../components/sidebar/homepage-sidebar";
import { Stack } from "@mui/material";
function HomePage() {
  return (
    <Stack direction="row">
      <HomepageSidebar />
      <Outlet />
    </Stack>
  );
}

export default HomePage;
