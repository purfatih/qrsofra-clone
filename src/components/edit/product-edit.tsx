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
import BreadMenuItems from "../bread-menu-items";
import { GetBranchesApi } from "../../api/branches-api";
import AutocompleteComp from "../autocomplete";
import { useProductEditFormik } from "../../formik/components/edit-formik";
import { GetCategoriesApi } from "../../api/category-api";
import type { BranchTypes, CategoryTypes, ProductFormTypes } from "../../types";
import { GetProductsApi, UploadProductImageApi } from "../../api/products-api";
import uploadImg from "../../assets/images/upload.png";
import { Upload } from "@mui/icons-material";
import { useParams } from "react-router";
import { useDataContext } from "../../context/data/data-context";
function ProductEdit() {
  const {
    branches,
    setBranches,
    restaurantId,
    categories,
    setCategories,
    setProducts,
    products,
  } = useDataContext();
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
  const { id } = useParams();
  const productEditFormik = useProductEditFormik(id);
  const product = products?.find(
    (item) => item._id === productEditFormik.values._id,
  );
  console.log("product branches:", product?.branches);

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
      title: "Ürünü Düzenle",
      path: `/dashboard/products/edit/${product?._id}`,
    },
  ];
  const [open, setOpen] = useState(false);

  console.log("products", products);

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
        Ürünü Düzenle
      </Typography>

      <BreadMenuItems menuItems={menuItems} />
      <form onSubmit={productEditFormik.handleSubmit}>
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
                          productEditFormik.setFieldValue("imageFile", file);
                          productEditFormik.setFieldValue(
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
                {productEditFormik.values.image && (
                  <>
                    <Box
                      component="img"
                      src={productEditFormik.values.image}
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
                        if (!productEditFormik.values.imageFile) return;
                        const logoResponse = await UploadProductImageApi(
                          productEditFormik.values.imageFile,
                        );
                        const logoUrl = `http://localhost:8080/uploads/${logoResponse.data}`;
                        setOpen(true);
                        productEditFormik.setFieldValue("images", [logoUrl]);
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
                      noOptionText="Kategori bulunamadı"
                      options={categories}
                      error={
                        productEditFormik.touched.categories &&
                        Boolean(productEditFormik.errors.categories)
                      }
                      helperText={
                        productEditFormik.touched.categories &&
                        productEditFormik.errors.categories
                      }
                      label="Ürün Kategorisi"
                      getOptionLabel={(category: CategoryTypes) =>
                        category.name
                      }
                      value={categories.filter((category: CategoryTypes) =>
                        productEditFormik.values.categories?.includes(
                          category._id!,
                        ),
                      )}
                      onChange={(_, newValue) => {
                        productEditFormik.setFieldValue(
                          "categories",
                          newValue.map((c: CategoryTypes) => c._id),
                        );
                      }}
                    />

                    <FormInput
                      label="Ürün Adı"
                      name="name"
                      value={productEditFormik.values.name}
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }}
                      onChange={productEditFormik.handleChange}
                      onBlur={productEditFormik.handleBlur}
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
                        productEditFormik.touched.name &&
                        Boolean(productEditFormik.errors.name)
                      }
                      helperText={
                        productEditFormik.touched.name &&
                        productEditFormik.errors.name
                      }
                    />
                    <TextField
                      label="Ürün Açıklaması"
                      multiline
                      minRows={4}
                      name="description"
                      sx={{
                        "& textarea::placeholder": {
                          color: "#637381",
                          opacity: 1,
                        },
                      }}
                      value={productEditFormik.values.description}
                      onChange={productEditFormik.handleChange}
                      onBlur={productEditFormik.handleBlur}
                      error={
                        productEditFormik.touched.description &&
                        Boolean(productEditFormik.errors.description)
                      }
                      helperText={
                        productEditFormik.touched.description &&
                        productEditFormik.errors.description
                      }
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }}
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
                      onChange={productEditFormik.handleChange}
                      onBlur={productEditFormik.handleBlur}
                      error={
                        productEditFormik.touched.price &&
                        Boolean(productEditFormik.errors.price)
                      }
                      helperText={
                        productEditFormik.touched.price &&
                        productEditFormik.errors.price
                      }
                      value={productEditFormik.values.price}
                    />
                    <AutocompleteComp
                      noOptionText="Şube bulunamadı"
                      options={branches}
                      error={
                        productEditFormik.touched.branches &&
                        Boolean(productEditFormik.errors.branches)
                      }
                      label="Ürünün Ekleneceği Şubeler"
                      getOptionLabel={(branch) => branch.name}
                      value={branches?.filter((p: BranchTypes) =>
                        productEditFormik.values.branches.includes(p._id!),
                      )}
                      onChange={(_, newValue) => {
                        productEditFormik.setFieldValue(
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

export default ProductEdit;
