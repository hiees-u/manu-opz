import type { ApiResponse } from "~~/types/api.response";
import type { OrderSummaryRequest } from "~~/types/orders/orders.request";
import type { OrderSummaryResponse } from "~~/types/orders/orders.response";

export const OrdersApi = {
  getOrderSummary: async (summaryRequest: OrderSummaryRequest): Promise<ApiResponse<OrderSummaryResponse>> => {
    const response = await $fetch<ApiResponse<OrderSummaryResponse>>("/api/orders/summary", {
      method: "POST",
      body: summaryRequest,
    });
    return response;
  },
  getOrderTotal: async (request: OrderSummaryRequest): Promise<ApiResponse<number>> => {
    const response = await $fetch<ApiResponse<number>>("/api/orders/total", {
      method: "POST",
      body: request,
    });
    return response;
  }
}