import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { CategoryTypes, BranchTypes, ProductTypes } from "../types";
import { GetRestaurantApi } from "../api/restaurant-api";
import { DeleteCategoryApi } from "../api/category-api";
import { DeleteProductApi } from "../api/products-api";
import { DeleteBranchApi } from "../api/branches-api";
type ErrorResponseDataType = {
  success: boolean | null;
  message: string;
};
type Restaurant = {
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

type ContextType = {
  showRestaurantData: Restaurant[];
  setShowRestaurantData: React.Dispatch<React.SetStateAction<Restaurant[]>>;
  loginErrorResponseData: ErrorResponseDataType;
  setLoginErrorResponseData: React.Dispatch<
    React.SetStateAction<ErrorResponseDataType>
  >;
  uploadLogo: string;
  setUpLoadLogo: React.Dispatch<React.SetStateAction<string>>;
  newBranchData: BranchTypes[];
  setNewBranchData: React.Dispatch<React.SetStateAction<BranchTypes[]>>;
  restaurantId: string;
  setRestaurantId: React.Dispatch<React.SetStateAction<string>>;
  branches: BranchTypes[];
  setBranches: React.Dispatch<React.SetStateAction<BranchTypes[]>>;
  deletingId: string | null;
  setDeletingId: React.Dispatch<React.SetStateAction<string | null>>;
  handleCategoryDelete: (id: string) => Promise<void>;
  categories: CategoryTypes[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryTypes[]>>;
  fetchRestaurants: () => Promise<void>;
  products: ProductTypes[];
  setProducts: React.Dispatch<React.SetStateAction<ProductTypes[]>>;
  handleProductDelete: (id: string) => Promise<void>;
  handleBranchDelete: (id: string) => Promise<void>;
};

const Context = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [loginErrorResponseData, setLoginErrorResponseData] =
    useState<ErrorResponseDataType>({
      success: null,
      message: "",
    });
  const [showRestaurantData, setShowRestaurantData] = useState<Restaurant[]>(
    [],
  );
  const [uploadLogo, setUpLoadLogo] = useState("");
  const [newBranchData, setNewBranchData] = useState<BranchTypes[]>([]);
  const [restaurantId, setRestaurantId] = useState("");
  const [branches, setBranches] = useState<BranchTypes[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const [products, setProducts] = useState<ProductTypes[]>([]);

  const handleProductDelete = async (id: string) => {
    try {
      setDeletingId(id);
      setProducts((prev) => prev.filter((product) => product._id !== id));
      await DeleteProductApi(id);
    } catch (error) {
      console.error("Silme hatası:", error);
      setProducts((prev) => prev);
    } finally {
      setDeletingId(null);
    }
  };
  const handleCategoryDelete = async (id: string) => {
    try {
      setDeletingId(id);
      setCategories((prev) => prev.filter((category) => category._id !== id));
      await DeleteCategoryApi(id);
    } catch (error) {
      console.error("Silme hatası:", error);
      setCategories((prev) => prev);
    } finally {
      setDeletingId(null);
    }
  };
  const handleBranchDelete = async (id: string) => {
    try {
      setDeletingId(id);
      setBranches((prev) => prev.filter((branch) => branch._id !== id));
      await DeleteBranchApi(id);
    } catch (error) {
      console.error("Silme hatası:", error);
      setBranches((prev) => prev);
    } finally {
      setDeletingId(null);
    }
  };
  const fetchRestaurants = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const data = await GetRestaurantApi();
    setShowRestaurantData(data.data);
    setRestaurantId(data.data[0]?._id ?? "");
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  return (
    <Context.Provider
      value={{
        loginErrorResponseData,
        setLoginErrorResponseData,
        showRestaurantData,
        setShowRestaurantData,
        uploadLogo,
        setUpLoadLogo,
        newBranchData,
        setNewBranchData,
        restaurantId,
        setRestaurantId,
        branches,
        handleProductDelete,
        setProducts,
        deletingId,
        setDeletingId,
        handleCategoryDelete,
        categories,
        setCategories,
        fetchRestaurants,
        products,
        handleBranchDelete,
        setBranches,
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
