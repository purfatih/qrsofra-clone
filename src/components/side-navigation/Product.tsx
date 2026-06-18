import { Add } from "@mui/icons-material";
import {
  ButtonBase,
  Container,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ProductTable from "../listing-table/product-table";
import BreadMenuItems from "../bread-menu-items";
import { useState } from "react";
import { useStateContext } from "../../context/state/state-context";

function Product() {
  const menuItems = [
    {
      title: "Anasayfa",
      path: "/dashboard/home",
    },
    {
      title: "Ürünler",
      path: "/dashboard/products/list",
    },
  ];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { setOpenExtraProductDialog } = useStateContext();
  const handleClickOpen = () => {
    setOpenExtraProductDialog(true);
  };
  return (
    <Container sx={{ p: "90px" }}>
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
            Ürünler
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
            }}
          >
            <BreadMenuItems menuItems={menuItems} />
          </Stack>
        </Stack>

        <ButtonBase
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{
            backgroundColor: "#1C252E",
            height: "36px",
            borderRadius: "8px",
            color: "#ffffff",
            fontSize: "14px",
            fontFamily: "Nunito Sans",
            fontWeight: "700",
            textTransform: "none",
            padding: "8px",
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
              Yeni Ürün
            </Typography>
          </Stack>
        </ButtonBase>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          sx={{ borderRadius: "8px" }}
        >
          <MenuItem
            component={Link}
            to={"/dashboard/products/new"}
            sx={{
              fontSize: "14px",
              fontFamily: "Nunito Sans",
              textDecoration: "none",
            }}
          >
            Yeni bir ürün oluştur
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: "14px",
              fontFamily: "Nunito Sans",
              textDecoration: "none",
            }}
            onClick={handleClickOpen}
          >
            Yeni bir yan ürün ekle
          </MenuItem>
        </Menu>
      </Stack>
      <ProductTable />
    </Container>
  );
}
export default Product;
