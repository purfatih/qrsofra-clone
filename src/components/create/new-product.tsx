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
} from "@mui/material";
import FormInput from "../form-input";
import { useNewCategoryFormik } from "../../formik/components/newcategory-formik";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/Context";
import BreadMenuItems from "../bread-menu-items";
import { GetBranchesApi } from "../../api/branches-api";
import AutocompleteComp from "../autocomplete";

function NewCategory() {
  const { branches, setBranches, restaurantId } = useGlobalContext();
  useEffect(() => {
    const fetchBranches = async () => {
      if (restaurantId) {
        const data = await GetBranchesApi(restaurantId);
        setBranches(data);
      }
    };
    fetchBranches();
  }, [restaurantId]);
  const newCategoryFormik = useNewCategoryFormik();
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
      <Grid container>
        <Stack sx={{ flexDirection: "row", gap: "24px", mt: "40px" }}>
          <Grid size={4}>
            <Paper
              sx={{
                padding: "24px",
                height: "325px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#1C252E1A",
                  border: "2px dashed #1C252E1A",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Nunito Sans",
                    textAlign: "center",
                  }}
                >
                  Sürükleyin veya dosya seçin Dosyaları buraya sürükleyin veya
                  cihazınızdaki dosyalaragöz atın.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid size="grow">
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
                <form onSubmit={newCategoryFormik.handleSubmit}>
                  <Stack
                    sx={{
                      pt: "24px",
                      height: "max-content",
                      gap: "24px",
                    }}
                  >
                    <AutocompleteComp
                      options={branches}
                      error={
                        newCategoryFormik.touched.branchIds &&
                        Boolean(newCategoryFormik.errors.branchIds)
                      }
                      helperText={
                        newCategoryFormik.touched.branchIds &&
                        newCategoryFormik.errors.branchIds
                      }
                      label="Ürün Kategorisi"
                      getOptionLabel={(branch) => branch.name}
                      value={branches.filter((b) =>
                        newCategoryFormik.values.branchIds.includes(b._id),
                      )}
                      onChange={(_, newValue) => {
                        newCategoryFormik.setFieldValue(
                          "branchIds",
                          newValue.map((b) => b._id),
                        );
                      }}
                    />
                    <FormInput
                      label="Kategori Adı"
                      name="name"
                      value={newCategoryFormik.values.name}
                      onChange={newCategoryFormik.handleChange}
                      onBlur={newCategoryFormik.handleBlur}
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
                        newCategoryFormik.touched.name &&
                        Boolean(newCategoryFormik.errors.name)
                      }
                      helperText={
                        newCategoryFormik.touched.name &&
                        newCategoryFormik.errors.name
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
                    />
                    <AutocompleteComp
                      options={branches}
                      error={
                        newCategoryFormik.touched.branchIds &&
                        Boolean(newCategoryFormik.errors.branchIds)
                      }
                      label="Ürünün Ekleneceği Şubeler"
                      getOptionLabel={(branch) => branch.name}
                      value={branches.filter((b) =>
                        newCategoryFormik.values.branchIds.includes(b._id),
                      )}
                      onChange={(_, newValue) => {
                        newCategoryFormik.setFieldValue(
                          "branchIds",
                          newValue.map((b) => b._id),
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
                </form>
              </Paper>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </Container>
  );
}

export default NewCategory;
