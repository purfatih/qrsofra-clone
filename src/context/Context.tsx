import { createContext, useContext, useState, type ReactNode } from "react";
type ErrorResponseDataType = {
  success: boolean | null;
  message: string;
};
type RestaurantType = {
  data: [
    {
      images?: string;
      logo?: string;
      name: string;
      description?: string;
      instagramName?: string;
      currencies?: string[];
      status?: "ACTIVE" | "PASSIVE";
      _id?: string;
      user?: string;
      createdAt?: string;
      updatedAt?: string;
    },
  ];
};
type ContextType = {
  showRestaurantData: RestaurantType;
  setShowRestaurantData: React.Dispatch<React.SetStateAction<RestaurantType>>;
  loginErrorResponseData: ErrorResponseDataType;
  setLoginErrorResponseData: React.Dispatch<
    React.SetStateAction<ErrorResponseDataType>
  >;
  uploadLogo: string;
  setUpLoadLogo: React.Dispatch<React.SetStateAction<string>>;
};

const Context = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [loginErrorResponseData, setLoginErrorResponseData] =
    useState<ErrorResponseDataType>({
      success: null,
      message: "",
    });
  const [showRestaurantData, setShowRestaurantData] = useState<RestaurantType>({
    data: [
      {
        name: "",
        images: "",
      },
    ],
  });
  const [uploadLogo, setUpLoadLogo] = useState("");

  return (
    <Context.Provider
      value={{
        loginErrorResponseData,
        setLoginErrorResponseData,
        showRestaurantData,
        setShowRestaurantData,
        uploadLogo,
        setUpLoadLogo,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useGlobalContext must be used within a ContextProvider");
  }
  return context;
};
