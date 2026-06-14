import { useState } from "react";
import { Button, Snackbar } from "@mui/material";

export default function SnackbarComp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Ürün başarıyla oluşturuldu"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
    </>
  );
}
