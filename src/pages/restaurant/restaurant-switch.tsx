import {
  Avatar,
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDataContext } from "../../context/data/data-context";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function RestaurantSwitch() {
  const {
    showRestaurantData,
    restaurantId,
    loadedRestaurantId,
    setRestaurantId,
  } = useDataContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRestaurantSwitch = async (rId: string) => {
    const fetchData = async () => {
      try {
        if (!rId) return;
        if (rId === loadedRestaurantId) return;
        setRestaurantId(rId);
      } catch (error) {
        console.error("Restaurant data fetch error:", error);
      }
    };
    fetchData();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack sx={{ flexDirection: "row" }}>
      <ButtonBase
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
        aria-controls={anchorEl ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? "true" : undefined}
        onClick={(e) => {
          handleOpen(e);
        }}
      >
        <Avatar
          sx={{
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            border: "1px solid #eee",
          }}
        ></Avatar>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            fontFamily: "Nunito Sans",
            color: "#1C252E",
          }}
        >
          {showRestaurantData?.find((item) => item._id === restaurantId)?.name}
        </Typography>{" "}
        <KeyboardArrowDownIcon />
      </ButtonBase>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {showRestaurantData?.map((itemRestaurant) => (
          <MenuItem
            selected={itemRestaurant._id === restaurantId}
            key={itemRestaurant._id}
            onClick={() => {
              handleRestaurantSwitch(itemRestaurant._id);
              handleClose();
            }}
            sx={{
              maxWidth: "225px",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexDirection: "row",
              }}
            >
              <Avatar
                sx={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  border: "1px solid #eee",
                }}
              ></Avatar>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  fontFamily: "Nunito Sans",
                  color: "#1C252E",
                }}
              >
                {itemRestaurant.name}
              </Typography>
            </Stack>
          </MenuItem>
        ))}{" "}
      </Menu>
    </Stack>
  );
}

export default RestaurantSwitch;
