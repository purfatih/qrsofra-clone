import { Avatar, Box, ButtonBase, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context/Context";

function Dashboard() {
  const navigate = useNavigate();
  const { showRestaurantData, setRestaurantId } = useGlobalContext();

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
        {showRestaurantData?.map((item, index) => {
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
              <ButtonBase
                onClick={() => {
                  console.log("Tıklanan restoran ID:", item._id);
                  setRestaurantId(item._id ?? "");
                  navigate(`/dashboard/home`);
                }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={item.logo}
                  sx={{ width: "100px", height: "100px" }}
                />
              </ButtonBase>

              <Typography>{item.name}</Typography>
            </Stack>
          );
        })}
        <Stack
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
          <ButtonBase
            onClick={() => {
              navigate(`/dashboard/create-restaurant`);
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <Stack
                sx={{
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AddIcon sx={{ width: "32px", height: "32px" }} />
              </Stack>
              <Typography>Restoran Oluştur</Typography>
            </Stack>
          </ButtonBase>
        </Stack>
      </Box>
    </>
  );
}

export default Dashboard;
