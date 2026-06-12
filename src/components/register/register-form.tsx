import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import FormInput from "../form-input";

import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useRegisterFormik } from "../../formik/components/signup-formik";

function RegisterForm() {
  const navigate = useNavigate();
  const formik = useRegisterFormik();
  const [showPassword, setShowPassword] = useState(false);
  const formFields = [
    { name: "firstName", label: "İsim", type: "text" },
    { name: "lastName", label: "Soyisim", type: "text" },
    { name: "email", label: "Email adresi", type: "text" },
    {
      name: "phoneNumber",
      label: "Telefon Numarası",
      type: "tel",
      placeholder: "(+90) 555 555 55 55",
    },
    {
      name: "password",
      label: "Şifre",
      type: "password",
      placeholder: "6+ karakter",
      hasPasswordToggle: true,
    },
    {
      name: "confirmPassword",
      label: "Şifreyi tekrar girin",
      type: "password",
      hasPasswordToggle: true,
    },
  ].map((field) => ({
    ...field,
    error: formik.touched[field.name] && !!formik.errors[field.name],
    helperText: formik.touched[field.name] && formik.errors[field.name],
  }));
  return (
    <>
      <Stack sx={{ mx: "auto", pb: "48px" }}>
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
              fontSize: "20px",
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
              onClick={() => navigate("/login")}
            >
              Giriş yap
            </button>
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Stack sx={{ gap: "24px" }}>
            <Stack sx={{ flexDirection: "column", gap: "16px" }}>
              {formFields.map((field) => (
                <FormInput
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  type={
                    field.hasPasswordToggle
                      ? showPassword
                        ? "text"
                        : "password"
                      : field.type
                  }
                  placeholder={field.placeholder}
                  variant="outlined"
                  value={formik.values[field.name]} // ✅
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={field.error} // ✅
                  helperText={field.helperText} // ✅
                  slotProps={{
                    input: {
                      endAdornment: field.hasPasswordToggle ? (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityIcon sx={{ color: "#00A76F" }} />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ) : undefined,
                    },
                  }}
                />
              ))}
            </Stack>
            <Box sx={{ gap: "4px" }}>
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Checkbox name="analyticsConsent" />
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
                  <span style={{ color: "#00A76F" }}>Açık Rıza Metni'ni </span>
                  okudum, kişisel verilerimin analiz amacıyla kullanılmasını
                  kabul ediyorum.
                </Typography>
              </Stack>
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Checkbox
                  name="policiesAccepted"
                  checked={formik.values.policiesAccepted}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
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
                  <span style={{ color: "#00A76F" }}>Hizmet Şartlarını </span>
                  ve
                  <span style={{ color: "#00A76F" }}>
                    {" "}
                    Gizlilik Politikasını
                  </span>{" "}
                  kabul ediyorum.
                  {formik.touched.policiesAccepted &&
                    formik.errors.policiesAccepted && (
                      <div
                        style={{
                          color: "#d32f2f",
                          fontSize: "12px",
                          lineHeight: "1.66",
                        }}
                      >
                        {formik.errors.policiesAccepted}
                      </div>
                    )}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Checkbox name="marketingConsent" />

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
