import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import FormInput from "../FormInput";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import { useLoginFormik } from "../../formik/components/loginFormik";
import ReportIcon from "@mui/icons-material/Report";
import { useState } from "react";
import { useGlobalContext } from "../../Context";
function LoginForm() {
  const formik = useLoginFormik();
  const [showPassword, setShowPassword] = useState(false);
  const { responseData, setResponseData } = useGlobalContext();
  console.log(responseData);
  return (
    <Stack>
      <Box
        sx={{
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "420px",
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
          Hesabınıza giriş yapın
        </Typography>
        <Typography
          sx={{
            display: "flex",
            gap: "4px",
            color: "#637381",
          }}
        >
          Hesabınız yok mu?
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
            Kayıt ol
          </button>
        </Typography>
      </Box>

      <form style={{ maxWidth: "480px" }} onSubmit={formik.handleSubmit}>
        <Stack sx={{ gap: "24px" }}>
          {responseData?.success === false && (
            <Box
              sx={{
                backgroundColor: "#FFE9D5",
                borderRadius: "4px",
                padding: "12px",
                marginBottom: "24px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#7A0916",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "1.5",
                  fontFamily: "Nunito Sans",
                  borderRadius: "4px",
                }}
              >
                <ReportIcon sx={{ color: "#7A0916" }} />
                {responseData.message}
              </Typography>
            </Box>
          )}
          <FormInput
            name="email"
            label="Email adresi"
            variant="outlined"
            type="text"
            value={formik.values.email}
            onChange={(e) => {
              setResponseData({ success: null, message: "" });
              formik.handleChange(e);
            }}
            error={formik.touched?.email && !!formik.errors.email}
            helperText={formik.touched?.email && formik.errors.email}
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
            onBlur={formik.handleBlur}
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
          />
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
            Giriş Yap
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default LoginForm;
