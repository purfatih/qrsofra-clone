import { Box, Stack, Typography } from "@mui/material";
import logoImage from "../../assets/images/logo-row.png";
import { Home, Category, Inventory, Sort, Store } from "@mui/icons-material";
import { Link } from "react-router";

function HomepageSidebar() {
  const sidebarItems = [
    {
      label: "Ana Sayfa",
      icon: <Home />,
      path: "/dashboard/home",
    },
    {
      label: "Şubeler",
      icon: <Store />,
      path: "/dashboard/branches/list",
    },
    {
      label: "Kategoriler",
      icon: <Category />,
      path: "/dashboard/categories/list",
    },
    {
      label: "Ürünler",
      icon: <Inventory />,
      path: "/dashboard/products/list",
    },
    {
      label: "Sıralama",
      icon: <Sort />,
      path: "/dashboard/sorting",
    },
  ];
  return (
    <Box
      sx={{
        width: "300px",
        height: "100vh",
        bgcolor: "#ffffff",
        padding: "20px",
        borderRight: "1px solid #E5E7EB",
      }}
    >
      <Typography
        component={"img"}
        src={logoImage}
        alt="logo"
        sx={{
          width: "110px",
          height: "40px",
          objectFit: "contain",
          paddingBottom: "8px",
        }}
      />
      <Typography
        sx={{ fontSize: "11px", color: "#919EAB", paddingTop: "16px" }}
      >
        GENEL
      </Typography>
      <Stack sx={{ paddingY: "4px", pr: "8px" }}>
        {sidebarItems.map((item) => (
          <Stack
            key={item.path}
            component={Link}
            to={item.path}
            sx={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              padding: "10px",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#919eab14" },
              "&:active": { backgroundColor: "#00a76f14", color: "#00A76F" },
              cursor: "pointer",
            }}
          >
            <Typography sx={{ width: "24px", height: "24px" }}>
              {item.icon}
            </Typography>

            <Typography sx={{ fontSize: "14px", fontFamily: "Nunito Sans" }}>
              {item.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default HomepageSidebar;
