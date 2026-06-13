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
  restaurantId?: string;
  name?: string;
  status?: 'ACTIVE' | 'PASSIVE';
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
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
  name: string;
  _id?: string;
  restaurantId?: string;
  order?: number;
  status?: 'ACTIVE' | 'PASSIVE';
  createdAt?: string;
  updatedAt?: string;
  branches?: {
    _id: string;
    name?: string;
  }[];
  branchIds?: string[];
};
export type ProductTypes = {
  name?: string;
  description: string;
  price: number;
  categories: CategoryTypes[];
  image?: string;
  imageFile?: File | null;
  extraProducts: string[];
  restaurantId: string;
  status: 'ACTIVE' | 'PASSIVE';
  branches: string[];
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
};
export type ProductResponseTypes = {
  data: ProductTypes[];
  success: boolean;
};
