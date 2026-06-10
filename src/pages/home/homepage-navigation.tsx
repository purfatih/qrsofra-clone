import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
function HomepageNavigation() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#ffffff",
        padding: "20px",
        borderRight: "1px solid #E5E7EB",
      }}
    >
      <Outlet />
    </Box>
  );
}

export default HomepageNavigation;
