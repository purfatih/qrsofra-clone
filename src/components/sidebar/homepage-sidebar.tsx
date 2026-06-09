import { Box, ButtonBase, Icon, Stack, Typography } from "@mui/material";
import logoImage from "../../assets/images/logo-row.png";
import { Home, Store, Category, Inventory, Sort } from "@mui/icons-material";
function HomepageSidebar() {
  const sidebarItems = [
    {
      label: "Ana Sayfa",
      icon: <Home />,
    },
    {
      label: "Şubeler",
      icon: <Store />,
    },
    {
      label: "Kategoriler",
      icon: <Category />,
    },
    {
      label: "Ürünler",
      icon: <Inventory />,
    },
    {
      label: "Sıralama",
      icon: <Sort />,
    },
  ];
  return (
    <Box
      sx={{
        width: "300px",
        height: "100%",
        bgcolor: "#ffffff",
        padding: "20px",
        position: "fixed",
        top: "0",
        left: "0",
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
            key={item.label}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
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
