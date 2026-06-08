import {
  Avatar,
  Box,
  ButtonBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context/Context";
import { useEffect } from "react";
import { GetRestaurantApi } from "../../api/restaurant-api";
import { useRestaurantCreateFormik } from "../../formik/components/restaurant-formik";
function DashboardPage() {
  const navigate = useNavigate();
  const { showRestaurantData, setShowRestaurantData } = useGlobalContext();
  const restaurantFormik = useRestaurantCreateFormik();
  useEffect(() => {
    const getRestaurantData = async () => {
      try {
        const response = await GetRestaurantApi();
        setShowRestaurantData(response);
      } catch (error: any) {
        console.log(error.response.data.message);
      }
    };
    getRestaurantData();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        paddingTop: "100px",
        gap: "24px",
        backgroundColor: "#fcfbfa",
      }}
    >
      {showRestaurantData?.data.map((item, index) => {
        return (
          <Stack
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "300px",
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
            }}
          >
            <Avatar src={item.logo} />
            <Typography>{item.name}</Typography>
          </Stack>
        );
      })}
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "300px",
          borderRadius: "16px",
          border: "1px solid #E5E7EB",
        }}
      >
        <Stack
          component={ButtonBase}
          onClick={() => {
            navigate("/dashboard/create-restaurant");
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <AddIcon sx={{ width: "32px", height: "32px", color: "#C4CDD5" }} />
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#454f5b",
              fontFamily: "Nunito Sans",
            }}
          >
            Restoran Oluştur
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default DashboardPage;
