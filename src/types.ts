export type RegisterTypes = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  analyticsConsent: boolean;
  marketingConsent: boolean;
  policiesAccepted: boolean;
};

export type LoginTypes = {
  email: string;
  password: string;
};

export type RestaurantCreateTypes = {
  name: string;
  description?: string;
  instagramName: string;
  currencies: string[];
  status: "ACTIVE" | "PASSIVE";
  logo: string;
  logoFile: File | null;
  _id?: string;
};
export type RestaurantTypes = {
  _id?: string;
  name: string;
  description?: string;
  instagramName: string;
  currencies: string[];
  status: "ACTIVE" | "PASSIVE";
  logo: string;
  logoFile: File | null;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  branches: BranchTypes[];
};
export type BranchTypes = {
  _id?: string;
  restaurantId?: string;
  name?: string;
  status?: "ACTIVE" | "PASSIVE";
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type BranchResponseTypes = {
  data: BranchTypes[];
  success: boolean;
};

export type CategoryResponseTypes = {
  data: CategoryTypes[];
  success: boolean;
};
export type CategoryTypes = {
  _id?: string;
  name?: string;
  image: string | null;
  branchIds: string[];
  status: "ACTIVE" | "INACTIVE" | string;
  createdAt?: string;
  updatedAt?: string;
  branches: BranchTypes[];
  restaurantId: string;
};
export type ProductTypes = {
  _id?: string;
  name?: string;
  description?: string;
  price?: number;
  images?: string[];
  categories?: CategoryTypes[];
  branches: string[] | BranchTypes[];
  extraProducts?: string[];
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  restaurantId?: string;
  status?: "ACTIVE" | "PASSIVE";
  image?: string;
  imageFile: File | null;
};
export type ExtraProductTypes = {
  _id?: string;
  name: string;
  price: number;
  restaurantId?: string;
  createdAt?: string;
  updatedAt?: string;
  status: "ACTIVE" | "PASSIVE";
};
export type ExtraProductFormValues = {
  name: string;
  price: string;
  restaurantId?: string;
  status: "ACTIVE" | "PASSIVE";
};
export type ProductFormTypes = Omit<ProductTypes, "categories"> & {
  categories: string[];
};
export type ProductResponseTypes = {
  data: ProductTypes[];
  success: boolean;
};
export type RestaurantDataTypes = {
  restaurant: RestaurantTypes[];
  branches: BranchTypes[];
  categories: CategoryTypes[];
  products: ProductTypes[];
  extraProducts: ExtraProductTypes[];
};
export type RestaurantAllDataResponseTypes = {
  data: RestaurantDataTypes[];
  status: string;
  message: string;
};
export type ErrorResponseDataType = {
  success: boolean | null;
  message: string;
};
export type Restaurant = {
  images: string;
  logo?: string;
  name: string;
  description?: string;
  instagramName?: string;
  currencies?: string[];
  status?: "ACTIVE" | "PASSIVE";
  user?: string;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
};
