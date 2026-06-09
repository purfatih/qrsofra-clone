import { Box } from "@mui/material";
import { NavLink } from "react-router";

function LandingPage() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "12px",
      }}
    >
      <NavLink to="/login">login</NavLink>
      <NavLink to="/register">register</NavLink>
    </Box>
  );
}

export default LandingPage;
