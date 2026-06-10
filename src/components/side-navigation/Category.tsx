import { Add } from "@mui/icons-material";
import {
  Breadcrumbs,
  Button,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import CategoryTable from "../table/category-table";

function Category() {
  return (
    <Container sx={{ padding: "40px" }}>
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
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="#1C252E"
                sx={{ fontSize: "14px", fontFamily: "Nunito Sans" }}
                href="/dashboard/home"
              >
                Anasayfa
              </Link>
              <Typography sx={{ color: "#919EAB", fontSize: "14px" }}>
                Şubeler
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Stack>
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
          variant="contained"
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
              Yeni Kategori
            </Typography>
          </Stack>
        </Button>
      </Stack>
      <CategoryTable />
    </Container>
  );
}
export default Category;
