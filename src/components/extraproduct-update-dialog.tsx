import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  ButtonBase,
} from "@mui/material";
import { useExtraProductEditFormik } from "../formik/components/edit-formik";
import { useStateContext } from "../context/state/state-context";

export default function ExtraProductEditDialog({
  selectedProducts,
}: {
  selectedProducts: string;
}) {
  const { openEditExtraProductDialog, setOpenEditExtraProductDialog } =
    useStateContext();
  const formik = useExtraProductEditFormik(selectedProducts, () => {
    setOpenEditExtraProductDialog(false);
  });
  const handleClose = () => {
    formik.resetForm();
    setOpenEditExtraProductDialog(false);
  };
  return (
    <Dialog
      open={openEditExtraProductDialog}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
          width: "600px",
          height: "370px",
        },
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle
          sx={{
            px: "24px",
            pt: "24px",
            pb: "0px",
          }}
        >
          Yeni Yan Ürün Oluştur
        </DialogTitle>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Nunito Sans",
            fontWeight: "400",
            color: "#637381",
            px: "24px",
          }}
        >
          Yeni yan ürün ekleyin (Örn. patates kızartması, 1.5 porsiyon)
        </Typography>
        <DialogContent>
          <TextField
            fullWidth
            name="name"
            label="Yan Ürün Adı"
            value={formik.values.name}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.errors.name}
            onBlur={formik.handleBlur}
          />

          <TextField
            fullWidth
            name="price"
            label="Fiyat"
            value={formik.values.price}
            onChange={formik.handleChange}
            margin="normal"
            type="number"
            sx={{
              "& textarea::placeholder": {
                color: "#637381",
                opacity: 1,
              },
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
              "& input[type=number]::-webkit-outer-spin-button": {
                WebkitAppearance: "none",
                margin: 0,
              },
              "& input[type=number]::-webkit-inner-spin-button": {
                WebkitAppearance: "none",
                margin: 0,
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ px: "24px", pb: "24px" }}>
          <ButtonBase
            sx={{
              border: "1px solid #919EAB",
              display: "flex",
              justifyContent: "center",
              borderRadius: "8px",
              alignItems: "center",
              width: "65px",
              height: "36px",
              fontWeight: "700",
              fontFamily: "Nunito Sans",
              "&:hover": { backgroundColor: "#F4F6F8" },
            }}
            onClick={handleClose}
          >
            İptal
          </ButtonBase>
          <ButtonBase
            sx={{
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "65px",
              height: "36px",
              backgroundColor: "#1C252E",
              fontWeight: "700",
              color: "white",
              fontFamily: "Nunito Sans",
              cursor: "pointer",
            }}
            type="submit"
            autoFocus
          >
            Kaydet
          </ButtonBase>
        </DialogActions>
      </form>
    </Dialog>
  );
}
