import { ProductsApi } from "~/services/api/products.client";
import type { Category } from "~~/types/category/category.model";
import type { CategoryRequest } from "~~/types/category/category.request";

const getCategories = async (payload: CategoryRequest): Promise<Category[]> => {
  const categories: Category[] =
    (await ProductsApi.getCategorys(payload)).data ?? [];

  return categories;
};

export { getCategories };
