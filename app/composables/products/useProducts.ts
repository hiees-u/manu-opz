import { ProductsApi } from "~/services/api/products.client";
import type { ApiResponse } from "~~/types/api.response";
import type { PassRatteRequest, ProductOutPutRequest } from "~~/types/products/products.request";
import type { PassRateResponse, ProductOutPutResponse } from "~~/types/products/products.response";

const getPassRate = async (payload: PassRatteRequest): Promise<ApiResponse<PassRateResponse>> => {
  const result = await ProductsApi.getPassRate(payload);

  return result;
};

const getProductsOutput = async (payload: ProductOutPutRequest) : Promise<ApiResponse<ProductOutPutResponse>> => {
  const result = await ProductsApi.getProductsOutPut(payload);
  return result || [];
}

export { getProductsOutput, getPassRate };