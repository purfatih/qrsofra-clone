import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type {
  CategoryTypes,
  BranchTypes,
  ProductTypes,
  ExtraProductTypes,
} from "../../types";
import { GetRestaurantApi } from "../../api/restaurant-api";
import type { Restaurant } from "../../types";

type ContextType = {
  showRestaurantData: Restaurant[];
  restaurantId: string;
  branches: BranchTypes[];
  categories: CategoryTypes[];
  products: ProductTypes[];
  extraProducts: ExtraProductTypes[];
  loadedRestaurantId: string | null;
  setRestaurantId: React.Dispatch<React.SetStateAction<string>>;
  setBranches: React.Dispatch<React.SetStateAction<BranchTypes[]>>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryTypes[]>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductTypes[]>>;
  setExtraProducts: React.Dispatch<React.SetStateAction<ExtraProductTypes[]>>;
  setShowRestaurantData: React.Dispatch<React.SetStateAction<Restaurant[]>>;
  fetchRestaurants: () => Promise<void>;
  setLoadedRestaurantId: React.Dispatch<React.SetStateAction<string | null>>;
};

const Data = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [showRestaurantData, setShowRestaurantData] = useState<Restaurant[]>(
    [],
  );
  const [restaurantId, setRestaurantId] = useState("");
  const [branches, setBranches] = useState<BranchTypes[]>([]);
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [extraProducts, setExtraProducts] = useState<ExtraProductTypes[]>([]);
  const [loadedRestaurantId, setLoadedRestaurantId] = useState<string | null>(
    null,
  );
  const fetchRestaurants = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const data = await GetRestaurantApi();
    setShowRestaurantData(data.data);
    if (!restaurantId) {
      setRestaurantId(data.data[0]?._id ?? "");
    }
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <Data.Provider
      value={{
        showRestaurantData,
        setShowRestaurantData,
        restaurantId,
        setRestaurantId,
        branches,
        setProducts,
        categories,
        setCategories,
        fetchRestaurants,
        products,
        setBranches,
        extraProducts,
        setExtraProducts,
        loadedRestaurantId,
        setLoadedRestaurantId,
      }}
    >
      {children}
    </Data.Provider>
  );
}

export const useDataContext = () => {
  const context = useContext(Data);
  if (!context) {
    throw new Error("useDataContext must be used within a ContextProvider");
  }
  return context;
};
