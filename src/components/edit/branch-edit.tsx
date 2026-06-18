import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FormInput from "../form-input";
import { useParams } from "react-router";
import BreadMenuItems from "../bread-menu-items";
import { useBranchEditFormik } from "../../formik/components/edit-formik";

function BranchEdit() {
  const { id } = useParams();
  console.log("params id", id);
  const editBranchFormik = useBranchEditFormik(id as string);
  const menuItems = [
    {
      title: "Anasayfa",
      path: "/dashboard/home",
    },
    {
      title: "Şubeler",
      path: "/dashboard/branches/list",
    },
    {
      title: "Şube Düzenleme",
      path: `/dashboard/branches/edit/${id}`,
    },
  ];
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
          Şubeyi Düzenle
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
            Yeni şube oluşturun
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
            Olivetta için yeni bir şube oluşturun
          </Typography>
        </Stack>
        <Divider
          sx={{
            mx: "-24px",
            height: "1px",
            backgroundColor: "#E5E7EB",
          }}
        />
        <form onSubmit={editBranchFormik.handleSubmit}>
          <Stack
            sx={{
              pt: "24px",
              height: "max-content",
              gap: "24px",
            }}
          >
            <FormInput
              label="Şube Adı (Örn: Kadıköy Şubesi)"
              name="name"
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
              value={editBranchFormik.values.name}
              onChange={editBranchFormik.handleChange}
              onBlur={editBranchFormik.handleBlur}
              error={
                editBranchFormik.touched.name &&
                Boolean(editBranchFormik.errors.name)
              }
              helperText={
                editBranchFormik.touched.name && editBranchFormik.errors.name
              }
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
              Şube Güncelle
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default BranchEdit;
