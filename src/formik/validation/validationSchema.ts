import * as Yup from "yup";

const registerValidationSchema = Yup.object({
  firstName: Yup.string().required("İsim alanı zorunludur!"),
  lastName: Yup.string().required("Soyisim alanı zorunludur!"),
  email: Yup.string()
    .email("Email geçerli bir email adresi olmalıdır!")
    .required("Email alanı zorunludur!"),
  phoneNumber: Yup.string().required("Telefon numarası alanı zorunludur!"),
  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalıdır!")
    .required("Şifre alanı zorunludur!"),
  confirmPassword: Yup.string()
    .required("Şifreyi tekrar giriniz!")
    .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor!"),
  policiesAccepted: Yup.boolean()
    .required("Hizmet Şartlarını ve Gizlilik Politikasını kabul etmelisiniz.")
    .oneOf(
      [true],
      "Hizmet Şartlarını ve Gizlilik Politikasını kabul etmelisiniz.",
    ),
});
const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Email geçerli bir email adresi olmalıdır!")
    .required("Email alanı zorunludur!"),
  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalıdır!")
    .required("Şifre alanı zorunludur!"),
});
export { registerValidationSchema, loginValidationSchema };
