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
