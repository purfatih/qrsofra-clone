import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FormInput from "../form-input";
import { useNewBranchFormik } from "../../formik/components/newbranch-formik";
import { useEffect } from "react";
import { GetRestaurantApi } from "../../api/restaurant-api";
import { useGlobalContext } from "../../context/Context";
import BreadMenuItems from "../bread-menu-items";

function NewBranch() {
  const { setShowRestaurantData, setRestaurantId } = useGlobalContext();
  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await GetRestaurantApi();
      setRestaurantId((prev) => (prev || data.data[0]?._id) ?? "");
      setShowRestaurantData(data.data);
    };
    fetchRestaurant();
  }, []);
  const newBranchFormik = useNewBranchFormik();
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
      title: "Yeni Şube Oluştur",
      path: "/dashboard/branches/new",
    },
  ];

  return (
    <Container sx={{ padding: "40px" }}>
      <Stack sx={{ gap: "16px", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "24px",
            fontFamily: "Nunito Sans",
            fontWeight: 700,
            color: "#1C252E",
          }}
        >
          Yeni Şube Oluştur
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
        <form onSubmit={newBranchFormik.handleSubmit}>
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
              value={newBranchFormik.values.name}
              onChange={newBranchFormik.handleChange}
              onBlur={newBranchFormik.handleBlur}
              error={
                newBranchFormik.touched.name &&
                Boolean(newBranchFormik.errors.name)
              }
              helperText={
                newBranchFormik.touched.name && newBranchFormik.errors.name
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
              Şube Oluştur
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default NewBranch;
