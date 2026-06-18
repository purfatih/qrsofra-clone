import type { RestaurantDataTypes } from "../types";
import { GetCategoriesApi } from "./category-api";
import { GetExtraProductsApi, GetProductsApi } from "./products-api";
import { GetBranchesApi } from "./branches-api";
import { GetRestaurantApi } from "./restaurant-api";

type GenericApiType<T> = {
  data: T;
  status: string;
  message: string;
};

export const GetRestaurantAllDataApi = async (
  rId: string,
): Promise<GenericApiType<RestaurantDataTypes>> => {
  const [restaurant, branches, categories, products, extraProducts] =
    await Promise.all([
      GetRestaurantApi(),
      GetBranchesApi(rId),
      GetCategoriesApi(rId),
      GetProductsApi(rId),
      GetExtraProductsApi(rId),
    ]);
  return {
    data: {
      restaurant: restaurant.data,
      branches: branches.data,
      categories: categories.data,
      products: products.data,
      extraProducts: extraProducts.data,
    },
    status: "success",
    message: "Restaurant all data",
  };
};
