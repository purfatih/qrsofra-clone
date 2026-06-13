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
  status: 'ACTIVE' | 'PASSIVE';
  logo: string;
  logoFile: File | null;
  _id?: string;
};

export type BranchTypes = {
  _id?: string;
  restaurantId?: string;
  name?: string;
  status?: 'ACTIVE' | 'PASSIVE';
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
  status: 'ACTIVE' | 'INACTIVE' | string;
  createdAt?: string;
  updatedAt?: string;
  branches: BranchTypes[];
  restaurantId: string;
};
export type ProductTypes = {
  _id?: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  categories: CategoryTypes[];
  branches: string[];
  extraProducts: string[]; // product ID listesi
  products: ProductTypes[];
  userId: string;
  createdAt?: string;
  updatedAt?: string;
  restaurantId: string;
  status: 'ACTIVE' | 'PASSIVE';
  image?: string;
  imageFile: File | null;
};
export type ProductFormTypes = Omit<ProductTypes, 'categories'> & {
  categories: string[];
};
export type ProductResponseTypes = {
  data: ProductTypes[];
  success: boolean;
};
