import { createContext, useContext, useState, type ReactNode } from "react";
import type { ErrorResponseDataType } from "../../types";

type ContextType = {
  loginErrorResponseData: ErrorResponseDataType;
  setLoginErrorResponseData: React.Dispatch<
    React.SetStateAction<ErrorResponseDataType>
  >;
  uploadLogo: string;
  setUpLoadLogo: React.Dispatch<React.SetStateAction<string>>;
  openExtraProductDialog: boolean;
  setOpenExtraProductDialog: React.Dispatch<React.SetStateAction<boolean>>;

  openEditExtraProductDialog: boolean;
  setOpenEditExtraProductDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const State = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [loginErrorResponseData, setLoginErrorResponseData] =
    useState<ErrorResponseDataType>({
      success: null,
      message: "",
    });
  const [uploadLogo, setUpLoadLogo] = useState("");
  const [openExtraProductDialog, setOpenExtraProductDialog] = useState(false);
  const [openEditExtraProductDialog, setOpenEditExtraProductDialog] =
    useState(false);

  return (
    <State.Provider
      value={{
        loginErrorResponseData,
        setLoginErrorResponseData,
        uploadLogo,
        setUpLoadLogo,
        openExtraProductDialog,
        setOpenExtraProductDialog,
        openEditExtraProductDialog,
        setOpenEditExtraProductDialog,
      }}
    >
      {children}
    </State.Provider>
  );
}

export const useStateContext = () => {
  const context = useContext(State);
  if (!context) {
    throw new Error("useStateContext must be used within a ContextProvider");
  }
  return context;
};
