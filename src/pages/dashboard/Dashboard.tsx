import { Avatar, Box, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context/Context";
import { useEffect } from "react";
import { GetRestaurantApi } from "../../api/restaurant-api";
function Dashboard() {
  const navigate = useNavigate();
  const { showRestaurantData, setShowRestaurantData } = useGlobalContext();

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
    <>
      <Box
        sx={{
          position: "fixed",
          top: "-165%",
          left: "50%",
          transform: "translateX(-50%)",
          height: "200vh",
          width: "300vh",
          background:
            "linear-gradient(rgb(75, 123, 229) 0%, rgb(62, 108, 209) 100%)",
          borderRadius: "100%",
          zIndex: 0,
        }}
      ></Box>
      <Stack
        sx={{
          position: "absolute",
          top: "10%",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "center",
            top: "10%",
            width: "100%",
          }}
        >
          Hoşgeldin Baba.
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "center",
            top: "10%",
            width: "100%",
          }}
        >
          Tüm restoranların burada görüntüleniyor.
        </Typography>
      </Stack>

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
          zIndex: 1,
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
                zIndex: 1,
                backgroundColor: "#fff",
                gap: "24px",
              }}
            >
              <Avatar
                src={item.logo}
                sx={{ width: "100px", height: "100px" }}
              />

              <Typography>{item.name}</Typography>
              <Typography>{item.instagramName}</Typography>
            </Stack>
          );
        })}
        <Stack
          onClick={() => {
            navigate("/dashboard/create-restaurant");
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "300px",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            cursor: "pointer",
            bgcolor: "#fff",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "68px",
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
        </Stack>
      </Box>
    </>
  );
}

export default Dashboard;
