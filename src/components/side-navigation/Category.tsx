import { Add } from "@mui/icons-material";
import {
  Breadcrumbs,
  Button,
  ButtonBase,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import CategoryTable from "../table/category-table";
import { Link, useNavigate } from "react-router-dom";
function Category() {
  const navigate = useNavigate();
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
            Kategoriler
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
            }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/dashboard/home">
                <ButtonBase
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Nunito Sans",
                    color: "#1C252E",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Anasayfa
                </ButtonBase>
              </Link>
              <Typography sx={{ color: "#919EAB", fontSize: "14px" }}>
                Kategoriler
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
          onClick={() => navigate("/dashboard/categories/new")}
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
