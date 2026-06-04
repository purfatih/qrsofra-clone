import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function RegisterForm() {
  return (
    <>
      <Stack sx={{ py: "96px" }}>
        <Box
          sx={{
            marginBottom: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: "20x",
              fontWeight: 700,
              lineHeight: "1.5",
              fontFamily: "Nunito Sans",
              color: "#1C252E",
            }}
          >
            Hesap oluştur
          </Typography>
          <Typography
            sx={{
              display: "flex",
              gap: "4px",
              color: "#637381",
            }}
          >
            Hesabınız var mı?
            <button
              style={{
                fontSize: "14px",
                fontFamily: "Nunito Sans",
                fontWeight: 600,
                color: "#00A76F",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              Giriş yap
            </button>
          </Typography>
        </Box>
        <form style={{ width: "420px" }}>
          <Stack sx={{ gap: "24px" }}>
            <Stack sx={{ flexDirection: "row", gap: "16px" }}>
              <TextField label="İsim" variant="outlined" type="text" />
              <TextField label="Soyisim" variant="outlined" type="text" />
            </Stack>
            <TextField label="Email adresi" variant="outlined" type="text" />
            <TextField
              label="Telefon Numarası"
              placeholder="(555) 555 55 55"
              variant="outlined"
              type="tel"
            />
            <TextField
              label="Şifre"
              placeholder="6+ karakter"
              variant="outlined"
              type="password"
            />
            <TextField
              label="Şifreyi tekrar girin"
              variant="outlined"
              type="password"
            />
            <Box sx={{ gap: "4px" }}>
              <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#637381",
                    lineHeight: "1.5",
                    fontFamily:
                      '"Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                  }}
                >
                  <span style={{ color: "#00A76F" }}>Açık Rıza Metni'ni</span>
                  okudum, kişisel verilerimin analiz amacıyla kullanılmasını
                  kabul ediyorum.
                </Typography>
              </Stack>{" "}
              <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#637381",
                    lineHeight: "1.5",
                    fontFamily:
                      '"Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                  }}
                >
                  <span style={{ color: "#00A76F" }}>Hizmet Şartlarını</span> ve
                  <span style={{ color: "#00A76F" }}>
                    Gizlilik Politikasını{" "}
                  </span>
                  kabul ediyorum.
                </Typography>
              </Stack>
              <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#637381",
                    lineHeight: "1.5",
                    fontFamily:
                      '"Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                  }}
                >
                  Tanıtım, kampanya ve bilgilendirme amaçlı e-posta/SMS
                  gönderilmesini kabul ediyorum.
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#1C252E",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "1.5",
              fontFamily: "Nunito Sans",
              width: "100%",
              textTransform: "none",
              marginTop: "24px",
            }}
          >
            Hesap Oluştur
          </Button>
        </form>
      </Stack>
    </>
  );
}

export default RegisterForm;
