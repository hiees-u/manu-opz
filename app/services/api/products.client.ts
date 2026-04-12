import type { ApiResponse } from "~~/types/api.response";
import type { CategoryRequest } from "~~/types/category/category.request";
import type { Category } from "~~/types/category/category.model";
import type { PassRatteRequest, ProductOutPutRequest } from "~~/types/products/products.request";
import type { PassRateResponse, ProductOutPutResponse } from "~~/types/products/products.response";

export const ProductsApi = {
  getCategorys: async (
    payload: CategoryRequest,
  ): Promise<ApiResponse<Category[]>> => {
    const result = await $fetch("/api/products/category", {
      method: "POST",
      body: payload,
    });

    return result;
  },
  getPassRate: async (
    payload: PassRatteRequest,
  ): Promise<ApiResponse<PassRateResponse>> => {
    const result = await $fetch("/api/products/passRate", {
      method: "POST",
      body: payload,
    });

    return result;
  },
  getProductsOutPut: async(
    payload: ProductOutPutRequest
  ): Promise<ApiResponse<ProductOutPutResponse>> => {
    const result = await $fetch('/api/products/outPut', {
      method: 'get',
      query: {
        ...payload
      }
    })

    return result;
  }
};
