import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";

interface BreadcrumbItem {
  title: string;
  path: string;
}
interface BreadMenuItemsProps {
  menuItems: BreadcrumbItem[];
}
function BreadMenuItems({ menuItems }: BreadMenuItemsProps) {
  const location = useLocation();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {menuItems.map((item, index) => {
        const isActive = location.pathname.startsWith(item.path);
        return (
          <MuiLink
            component={Link}
            to={item.path}
            key={index}
            sx={{
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "Nunito Sans",
              "&:hover": {
                textDecoration: isActive ? "none" : "underline",
              },
              color: isActive ? "#919EAB" : "#1C252E",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Nunito Sans",
                color: isActive ? "#919EAB" : "#1C252E",
                cursor: "default",
              }}
            >
              {item.title}
            </Typography>
          </MuiLink>
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadMenuItems;
