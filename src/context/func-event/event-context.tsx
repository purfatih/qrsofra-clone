import { createContext, useContext, useState, type ReactNode } from "react";
import type {
  CategoryTypes,
  BranchTypes,
  ProductTypes,
  ExtraProductTypes,
} from "../../types";
import { DeleteCategoryApi } from "../../api/category-api";
import {
  DeleteExtraProductApi,
  DeleteProductApi,
} from "../../api/products-api";
import { DeleteBranchApi } from "../../api/branches-api";

type ContextType = {
  branches: BranchTypes[];
  categories: CategoryTypes[];
  products: ProductTypes[];
  extraProducts: ExtraProductTypes[];
  deletingId: string | null;
  setBranches: React.Dispatch<React.SetStateAction<BranchTypes[]>>;
  setDeletingId: React.Dispatch<React.SetStateAction<string | null>>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryTypes[]>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductTypes[]>>;
  setExtraProducts: React.Dispatch<React.SetStateAction<ExtraProductTypes[]>>;
  handleCategoryDelete: (id: string) => Promise<void>;
  handleProductDelete: (id: string) => Promise<void>;
  handleBranchDelete: (id: string) => Promise<void>;
  handleExtraProductDelete: (id: string) => Promise<void>;
};

const Event = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
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

  const [extraProducts, setExtraProducts] = useState<ExtraProductTypes[]>([]);

  const handleExtraProductDelete = async (id: string) => {
    try {
      setDeletingId(id);
      setExtraProducts((prev) =>
        prev.filter((extraProduct) => extraProduct._id !== id),
      );
      await DeleteExtraProductApi(id);
    } catch (error) {
      console.error("Silme hatası:", error);
      setExtraProducts((prev) => prev);
    } finally {
      setDeletingId(null);
    }
  };

  const [categories, setCategories] = useState<CategoryTypes[]>([]);

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

  const [branches, setBranches] = useState<BranchTypes[]>([]);

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

  return (
    <Event.Provider
      value={{
        branches,
        categories,
        products,
        deletingId,
        extraProducts,
        setDeletingId,
        setProducts,
        setCategories,
        setBranches,
        handleBranchDelete,
        setExtraProducts,
        handleExtraProductDelete,
        handleCategoryDelete,
        handleProductDelete,
      }}
    >
      {children}
    </Event.Provider>
  );
}

export const useEventContext = () => {
  const context = useContext(Event);
  if (!context) {
    throw new Error("useEventContext must be used within a ContextProvider");
  }
  return context;
};
