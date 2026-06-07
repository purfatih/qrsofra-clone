import { Avatar, Paper, Stack, Typography } from "@mui/material";

function DashboardPage() {
  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        maxWidth: "152px",
        height: "300px",
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <Avatar sx={{ width: "100px", height: "100px" }}>sa</Avatar>
        <Typography sx={{ textAlign: "center" }}>sa</Typography>
      </Stack>
    </Paper>
  );
}

export default DashboardPage;
