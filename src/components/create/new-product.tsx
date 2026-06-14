import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Grid,
  ButtonBase,
  Snackbar,
  Alert,
} from "@mui/material";
import FormInput from "../form-input";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/Context";
import BreadMenuItems from "../bread-menu-items";
import { GetBranchesApi } from "../../api/branches-api";
import AutocompleteComp from "../autocomplete";
import { useNewProductFormik } from "../../formik/components/newproduct-formik";
import { GetCategoriesApi } from "../../api/category-api";
import type { BranchTypes, CategoryTypes } from "../../types";
import { GetProductsApi, UploadProductImageApi } from "../../api/products-api";
import uploadImg from "../../assets/images/upload.png";
import { Upload } from "@mui/icons-material";
function NewProduct() {
  const {
    branches,
    setBranches,
    restaurantId,
    categories,
    setCategories,
    setProducts,
  } = useGlobalContext();
  useEffect(() => {
    const fetchRestaurants = async () => {
      if (restaurantId) {
        const dataBranch = await GetBranchesApi(restaurantId);
        setBranches(dataBranch);
        const dataCategory = await GetCategoriesApi(restaurantId);
        setCategories(dataCategory.data);
        const dataProduct = await GetProductsApi(restaurantId);
        setProducts(dataProduct.data);
      }
    };

    fetchRestaurants();
  }, [restaurantId]);
  const newProductFormik = useNewProductFormik();
  const menuItems = [
    {
      title: "Anasayfa",
      path: "/dashboard/home",
    },
    {
      title: "Ürünler",
      path: "/dashboard/products/list",
    },
    {
      title: "Yeni Ürün",
      path: "/dashboard/products/new",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <Container sx={{ padding: "40px" }}>
      <Typography
        sx={{
          fontSize: "24px",
          fontFamily: "Nunito Sans",
          fontWeight: 700,
          color: "#1C252E",
        }}
      >
        Yeni Ürün Oluştur
      </Typography>

      <BreadMenuItems menuItems={menuItems} />
      <form onSubmit={newProductFormik.handleSubmit}>
        <Grid container>
          <Stack
            sx={{
              width: "100%",
              flexDirection: "row",
              gap: "24px",
              mt: "40px",
            }}
          >
            <Grid size={4}>
              <Paper
                sx={{
                  height: "fit-content",
                  width: "100%",
                  padding: "24px",
                }}
              >
                <label htmlFor="image" style={{ cursor: "pointer" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      backgroundColor: "#1C252E1A",
                      border: "2px dashed #1C252E1A",
                      borderRadius: "8px",
                    }}
                  >
                    <Stack
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "12px",
                        py: "24px",
                      }}
                    >
                      <Box
                        component="img"
                        src={uploadImg}
                        sx={{
                          width: "150px",
                          height: "150px",
                          objectFit: "contain",
                        }}
                      />

                      <input
                        id="image"
                        hidden
                        type="file"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          newProductFormik.setFieldValue("imageFile", file);
                          newProductFormik.setFieldValue(
                            "image",
                            URL.createObjectURL(file),
                          );
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700",
                          fontFamily: "Nunito Sans",
                          textAlign: "center",
                        }}
                      >
                        Sürükleyin veya dosya seçin
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                          textAlign: "center",
                        }}
                      >
                        Dosyaları buraya sürükleyin veya cihazınızdaki dosyalara
                        göz atın.
                      </Typography>
                    </Stack>
                  </Box>
                </label>
                {newProductFormik.values.image && (
                  <>
                    <Box
                      component="img"
                      src={newProductFormik.values.image}
                      alt="Product Image"
                      sx={{
                        bgcolor: "#1C252E1A",
                        height: "100px",
                        width: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        mt: "16px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    />
                    <ButtonBase
                      onClick={async (e) => {
                        e.preventDefault();
                        if (!newProductFormik.values.imageFile) return;
                        const logoResponse = await UploadProductImageApi(
                          newProductFormik.values.imageFile,
                        );
                        const logoUrl = `http://localhost:8080/uploads/${logoResponse.data}`;
                        setOpen(true);
                        newProductFormik.setFieldValue("images", [logoUrl]);
                      }}
                      sx={{
                        objectFit: "cover",
                        borderRadius: "8px",
                        mt: "16px",
                        backgroundColor: "#1C252E",
                        padding: "4px 12px",
                        fontSize: "14px",
                        fontWeight: "400",
                        fontFamily: "Nunito Sans",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "row",
                        gap: "8px",
                      }}
                    >
                      <Upload fontSize="small" />
                      Yükle
                    </ButtonBase>
                  </>
                )}
                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={() => setOpen(false)}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Alert severity="success" variant="filled">
                    Ürün başarıyla oluşturuldu
                  </Alert>
                </Snackbar>
              </Paper>
            </Grid>
            <Grid size={6}>
              <Stack>
                <Paper
                  sx={{
                    width: "100%",
                    mx: "auto",
                    borderRadius: "8px",
                    padding: "24px",
                  }}
                  elevation={1}
                >
                  <Stack
                    sx={{
                      height: "80px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontFamily: "Nunito Sans",
                        fontWeight: "400",
                      }}
                    >
                      Yeni Ürün Oluştur
                    </Typography>
                    <Typography
                      sx={{
                        mt: "4px",
                        fontSize: "14px",
                        fontFamily: "Nunito Sans",
                        fontWeight: "400",
                        color: "#637381",
                      }}
                    >
                      Olivetta için yeni bir kategori oluşturun
                    </Typography>
                  </Stack>
                  <Divider
                    sx={{
                      mx: "-24px",
                      height: "1px",
                      backgroundColor: "#E5E7EB",
                    }}
                  />

                  <Stack
                    sx={{
                      pt: "24px",
                      height: "max-content",
                      gap: "24px",
                    }}
                  >
                    <AutocompleteComp
                      options={categories}
                      error={
                        newProductFormik.touched.categories &&
                        Boolean(newProductFormik.errors.categories)
                      }
                      helperText={
                        newProductFormik.touched.categories &&
                        newProductFormik.errors.categories
                      }
                      label="Ürün Kategorisi"
                      getOptionLabel={(category) => category.name}
                      value={(categories ?? []).filter((c: CategoryTypes) =>
                        newProductFormik.values.categories.includes(c._id!),
                      )}
                      onChange={(_, newValue) => {
                        newProductFormik.setFieldValue(
                          "categories",
                          newValue.map((c) => c._id),
                        );
                      }}
                    />

                    <FormInput
                      label="Ürün Adı"
                      name="name"
                      value={newProductFormik.values.name}
                      onChange={newProductFormik.handleChange}
                      onBlur={newProductFormik.handleBlur}
                      sx={{
                        "& .MuiFormLabel-root": {
                          fontFamily: "Nunito Sans",
                          fontWeight: "400",
                          color: "#919EAB",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#1C252E",
                          fontFamily: "Nunito Sans",
                          fontWeight: "400",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { color: "black" },
                          "&.Mui-focused fieldset": {
                            borderColor: "#1C252E",
                            borderWidth: "1px",
                          },
                        },
                      }}
                      error={
                        newProductFormik.touched.name &&
                        Boolean(newProductFormik.errors.name)
                      }
                      helperText={
                        newProductFormik.touched.name &&
                        newProductFormik.errors.name
                      }
                    />
                    <TextField
                      multiline
                      minRows={4}
                      name="description"
                      placeholder="Ürün Açıklaması"
                      sx={{
                        "& textarea::placeholder": {
                          color: "#637381",
                          opacity: 1,
                        },
                      }}
                      onChange={newProductFormik.handleChange}
                      onBlur={newProductFormik.handleBlur}
                      error={
                        newProductFormik.touched.description &&
                        Boolean(newProductFormik.errors.description)
                      }
                      helperText={
                        newProductFormik.touched.description &&
                        newProductFormik.errors.description
                      }
                    />
                    <TextField
                      label="Fiyat"
                      name="price"
                      type="number"
                      sx={{
                        "& textarea::placeholder": {
                          color: "#637381",
                          opacity: 1,
                        },
                        "& input[type=number]": {
                          MozAppearance: "textfield",
                        },
                        "& input[type=number]::-webkit-outer-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                        "& input[type=number]::-webkit-inner-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                      }}
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">₺</InputAdornment>
                          ),
                        },
                      }}
                      onChange={newProductFormik.handleChange}
                      onBlur={newProductFormik.handleBlur}
                      error={
                        newProductFormik.touched.price &&
                        Boolean(newProductFormik.errors.price)
                      }
                      helperText={
                        newProductFormik.touched.price &&
                        newProductFormik.errors.price
                      }
                    />
                    <AutocompleteComp
                      options={branches}
                      error={
                        newProductFormik.touched.branches &&
                        Boolean(newProductFormik.errors.branches)
                      }
                      label="Ürünün Ekleneceği Şubeler"
                      getOptionLabel={(branch) => branch.name}
                      value={branches?.filter((p: BranchTypes) =>
                        newProductFormik.values.branches.includes(p._id!),
                      )}
                      onChange={(_, newValue) => {
                        newProductFormik.setFieldValue(
                          "branches",
                          newValue.map((p) => p._id),
                        );
                      }}
                      helperText="Hangi şubelerde satılacağını seçin"
                      sx={{
                        "& .MuiFormHelperText-root": {
                          fontFamily: "Nunito Sans",
                          fontWeight: "400",
                          color: "#637381",
                        },
                      }}
                    />

                    <Button
                      sx={{
                        backgroundColor: "#1C252E",
                        color: "#ffffff",
                        borderRadius: "8px",
                        fontFamily: "Nunito Sans",
                        fontWeight: "700",
                        fontSize: "14px",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#1C252E99" },
                      }}
                      type="submit"
                    >
                      Ürün Oluştur
                    </Button>
                  </Stack>
                </Paper>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </form>
    </Container>
  );
}

export default NewProduct;
