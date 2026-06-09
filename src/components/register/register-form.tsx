import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import FormInput from "../form-input";
import { useRegisterFormik } from "../../formik/components/register-formik";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";

function RegisterForm() {
  const navigate = useNavigate();
  const formik = useRegisterFormik();
  const [showPassword, setShowPassword] = useState(false);
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
        <Formik
          initialValues={formik.initialValues}
          onSubmit={formik.handleSubmit}
        >
          <Form>
            <Stack sx={{ gap: "24px" }}>
              <Stack sx={{ flexDirection: "row", gap: "16px" }}>
                <FormInput
                  name="firstName"
                  label="İsim"
                  variant="outlined"
                  type="text"
                  fullWidth
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched?.firstName && !!formik.errors.firstName}
                  helperText={
                    formik.touched?.firstName && formik.errors.firstName
                  }
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  name="lastName"
                  label="Soyisim"
                  variant="outlined"
                  type="text"
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched?.lastName && !!formik.errors.lastName}
                  helperText={
                    formik.touched?.lastName && formik.errors.lastName
                  }
                  onBlur={formik.handleBlur}
                />
              </Stack>
              <FormInput
                name="email"
                label="Email adresi"
                variant="outlined"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched?.email && !!formik.errors.email}
                helperText={formik.touched?.email && formik.errors.email}
                onBlur={formik.handleBlur}
              />
              <FormInput
                name="phoneNumber"
                label="Telefon Numarası"
                placeholder="(555) 555 55 55"
                variant="outlined"
                type="tel"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched?.phoneNumber && !!formik.errors.phoneNumber
                }
                helperText={
                  formik.touched?.phoneNumber && formik.errors.phoneNumber
                }
                onBlur={formik.handleBlur}
              />
              <FormInput
                name="password"
                label="Şifre"
                placeholder="6+ karakter"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched?.password && !!formik.errors.password}
                helperText={formik.touched?.password && formik.errors.password}
                slotProps={{
                  input: {
                    endAdornment: (
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
                    ),
                  },
                }}
                onBlur={formik.handleBlur}
              />
              <FormInput
                name="confirmPassword"
                label="Şifreyi tekrar girin"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                slotProps={{
                  input: {
                    endAdornment: (
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
                    ),
                  },
                }}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched?.confirmPassword &&
                  !!formik.errors.confirmPassword
                }
                helperText={
                  formik.touched?.confirmPassword &&
                  formik.errors.confirmPassword
                }
                onBlur={formik.handleBlur}
              />
              <Box sx={{ gap: "4px" }}>
                <Stack
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Field type="checkbox" name="analyticsConsent" />
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
                    <span style={{ color: "#00A76F" }}>
                      Açık Rıza Metni'ni{" "}
                    </span>
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
                  <Field
                    type="checkbox"
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
                  <Field name="marketingConsent" type="checkbox" />

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
              onClick={() => {
                navigate("/dashboard");
              }}
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
          </Form>
        </Formik>
      </Stack>
    </>
  );
}

export default RegisterForm;
