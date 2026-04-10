import { ProductsApi } from "~/services/api/products.client";
import type { ApiResponse } from "~~/types/api.response";
import type { PassRatteRequest } from "~~/types/products/products.request";
import type { PassRateResponse } from "~~/types/products/products.response";

const getPassRate = async (payload: PassRatteRequest): Promise<ApiResponse<PassRateResponse>> => {
  const result = await ProductsApi.getPassRate(payload);

  return result;
};

export { getPassRate };