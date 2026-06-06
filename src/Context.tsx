import { createContext, useContext, useState, type ReactNode } from "react";
type ResponseDataType = {
  success: boolean | null;
  message: string;
};
type ContextType = {
  responseData: ResponseDataType;
  setResponseData: React.Dispatch<React.SetStateAction<ResponseDataType>>;
};

const Context = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [responseData, setResponseData] = useState<ResponseDataType>({
    success: null,
    message: "",
  });

  return (
    <Context.Provider value={{ responseData, setResponseData }}>
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
