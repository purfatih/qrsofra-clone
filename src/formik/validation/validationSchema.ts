import * as Yup from 'yup';

const registerValidationSchema = Yup.object({
  firstName: Yup.string().required('İsim alanı zorunludur!'),
  lastName: Yup.string().required('Soyisim alanı zorunludur!'),
  email: Yup.string()
    .email('Email geçerli bir email adresi olmalıdır!')
    .required('Email alanı zorunludur!'),
  phoneNumber: Yup.string().required('Telefon numarası alanı zorunludur!'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalıdır!')
    .required('Şifre alanı zorunludur!'),
  confirmPassword: Yup.string()
    .required('Şifreyi tekrar giriniz!')
    .oneOf([Yup.ref('password')], 'Şifreler eşleşmiyor!'),
  policiesAccepted: Yup.boolean()
    .required('Hizmet Şartlarını ve Gizlilik Politikasını kabul etmelisiniz.')
    .oneOf(
      [true],
      'Hizmet Şartlarını ve Gizlilik Politikasını kabul etmelisiniz.',
    ),
});
const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Email geçerli bir email adresi olmalıdır!')
    .required('Email alanı zorunludur!'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalıdır!')
    .required('Şifre alanı zorunludur!'),
});
const restaurantCreateValidationSchema = Yup.object({
  name: Yup.string().required('Restoran adı minimum 3 karakter olmalıdır.'),
});
const BranchValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Şifre en az 3 karakter olmalıdır!')
    .required('Şube adı en az 3 karakter olmalıdır'),
});
const CategoryValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Kategori adı en az 3 karakter olmalıdır!')
    .required('Kategori adı boş olamaz'),
  branchIds: Yup.array().min(
    1,
    "En az bir şube seçiniz, şubeniz yoksa 'Şubeler' kısmından oluşturabilirsiniz.",
  ),
});
const ProductValidationSchewma = Yup.object({
  name: Yup.string()
    .min(3, 'Ürün adı en az 3 karakter olmalıdır!')
    .required('Ürün adı boş olamaz'),
  description: Yup.string()
    .min(3, 'Ürün açıklaması en az 3 karakter olmalıdır!')
    .required('Ürün açıklaması boş olamaz'),
  price: Yup.number()
    .min(3, 'Ürün fiyatı en az 3 karakter olmalıdır!')
    .required('Ürün fiyatı boş olamaz'),
  branches: Yup.array().min(
    1,
    "En az bir şube seçiniz, şubeniz yoksa 'Şubeler' kısmından oluşturabilirsiniz.",
  ),
  categories: Yup.array().min(
    1,
    "En az bir kategori seçiniz, kategoriniz yoksa 'Kategoriler' kısmından oluşturabilirsiniz.",
  ),
});
export {
  registerValidationSchema,
  loginValidationSchema,
  restaurantCreateValidationSchema,
  BranchValidationSchema,
  CategoryValidationSchema,
  ProductValidationSchewma,
};
