import { Add } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BranchTable from "../listing-table/branch-table";
import BreadMenuItems from "../bread-menu-items";

function Branch() {
  const menuItems = [
    {
      title: "Anasayfa",
      path: "/dashboard/home",
    },
    {
      title: "Şubeler",
      path: "/dashboard/branches/list",
    },
  ];
  return (
    <Container sx={{ padding: "90px" }}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "40px",
        }}
      >
        <Stack
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Nunito Sans",
              fontWeight: "700",
            }}
          >
            Şubeler
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
            }}
          >
            <BreadMenuItems menuItems={menuItems} />
          </Stack>
        </Stack>
        <Link to="/dashboard/branches/new">
          <Button
            sx={{
              backgroundColor: "#1C252E",
              height: "36px",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "14px",
              fontFamily: "Nunito Sans",
              fontWeight: "700",
              textTransform: "none",
              "&:hover": { backgroundColor: "#1C252E99" },
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Add sx={{ width: "20px", height: "20px", fontSize: "20px" }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Nunito Sans",
                  fontWeight: 700,
                }}
              >
                Yeni Şube Oluştur
              </Typography>
            </Stack>
          </Button>
        </Link>
      </Stack>
      <BranchTable />
    </Container>
  );
}
export default Branch;
