import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FormInput from "../form-input";
import { useParams } from "react-router";
import BreadMenuItems from "../bread-menu-items";
import { useCategoryEditFormik } from "../../formik/components/edit-formik";
import AutocompleteComp from "../autocomplete";
import { useEffect } from "react";
import { GetBranchesApi } from "../../api/branches-api";
import { useDataContext } from "../../context/data/data-context";

function CategoryEdit() {
  const { id } = useParams();
  const { branches, setBranches, restaurantId } = useDataContext();

  const editCategoryFormik = useCategoryEditFormik(id as string);
  const menuItems = [
    {
      title: "Anasayfa",
      path: "/dashboard/home",
    },
    {
      title: "Kategoriler",
      path: "/dashboard/categories/list",
    },
    {
      title: "Kategori Düzenle",
      path: `/dashboard/categories/edit/${id}`,
    },
  ];
  useEffect(() => {
    const fetchBranches = async () => {
      if (restaurantId) {
        const data = await GetBranchesApi(restaurantId);
        setBranches(data);
      }
    };
    fetchBranches();
  }, [restaurantId]);

  return (
    <Container sx={{ padding: "90px" }}>
      <Stack sx={{ gap: "16px", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "24px",
            fontFamily: "Nunito Sans",
            fontWeight: 700,
            color: "#1C252E",
          }}
        >
          Kategori Düzenle
        </Typography>

        <BreadMenuItems menuItems={menuItems} />
      </Stack>
      <Paper
        sx={{
          maxWidth: "880px",
          mx: "auto",
          borderRadius: "8px",
          padding: "24px",
          mt: "40px",
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
            Yeni Kategori Oluştur
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
        <form onSubmit={editCategoryFormik.handleSubmit}>
          <Stack
            sx={{
              pt: "24px",
              height: "max-content",
              gap: "24px",
            }}
          >
            <FormInput
              name="name"
              label={"Kategori Adı"}
              value={editCategoryFormik.values.name}
              onChange={editCategoryFormik.handleChange}
              onBlur={editCategoryFormik.handleBlur}
              error={
                editCategoryFormik.touched.name &&
                Boolean(editCategoryFormik.errors.name)
              }
              helperText={
                editCategoryFormik.touched.name &&
                editCategoryFormik.errors.name
              }
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
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />

            <AutocompleteComp
              value={branches.filter((b) =>
                editCategoryFormik.values.branchIds.includes(b._id),
              )}
              onChange={(_, newValue) =>
                editCategoryFormik.setFieldValue(
                  "branchIds",
                  newValue.map((b) => b._id),
                )
              }
              getOptionLabel={(option) => option.name}
              options={branches}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label={"Kategorinin Ekleneceği Şubeler"}
                />
              )}
              error={
                editCategoryFormik.touched.branchIds &&
                Boolean(editCategoryFormik.errors.branchIds)
              }
              helperText={
                editCategoryFormik.touched.branchIds &&
                editCategoryFormik.errors.branchIds
              }
              noOptionText="Şube bulunamadı"
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
              Kategori Güncelle
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default CategoryEdit;
