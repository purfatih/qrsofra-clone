import { Outlet } from "react-router-dom";
import HomepageSidebar from "../../components/sidebar/homepage-sidebar";
import { Box, Stack } from "@mui/material";
import RestaurantSwitch from "../restaurant/restaurant-switch";
function HomePage() {
  return (
    <Stack direction="row">
      <HomepageSidebar />
      <Box
        sx={{
          display: "inline-block",
          position: "absolute",
          top: "10px",
          left: "300px",
          py: "24px",
          px: "24px",
          width: "fit-content",
          height: "fit-content",
          borderRadius: "12px",
          zIndex: 999,
        }}
      >
        <RestaurantSwitch />
      </Box>
      <Outlet />
    </Stack>
  );
}

export default HomePage;
