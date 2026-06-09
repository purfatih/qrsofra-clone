import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../assets/images/logo-row.png";
import SideBarImg from "../../assets/images/sidebar-img.png";
function DashboardSidebar() {
  return (
    <Box
      sx={{
        px: "24px",
        py: "16px",
        width: "480px",
        height: "100vh",
        overflowY: "hidden",
        backgroundColor: "#fcfbfa",
      }}
    >
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "110px",
          height: "40px",
          marginBottom: "16px",
          objectFit: "contain",
        }}
      />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          margin: "0 auto",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          gap: "64px",
        }}
      >
        <Stack sx={{ textAlign: "center" }}>
          <Typography
            className="barlowBold"
            color="#1C252E"
            variant="h3"
            sx={{
              fontSize: "32px",
              lineHeight: "1.5",
              fontFamily: "Barlow",
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            Merhaba, Hoş Geldiniz
          </Typography>
          <Typography
            sx={{
              marginTop: "16px",
              fontSize: "16px",
              fontWeight: "400",
              color: "#637381",
              lineHeight: "1.5",
              fontFamily:
                '"Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            Restoranınızı ücretsiz bir şekilde dijitalleştirin ve yönetin.
          </Typography>
        </Stack>
        <Box>
          <img
            src={SideBarImg}
            alt="restaurant"
            style={{
              width: "432px",
              height: "324px",
              objectFit: "cover",
              aspectRatio: "4/3",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardSidebar;
