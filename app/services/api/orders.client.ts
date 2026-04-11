import type { ApiResponse } from "~~/types/api.response";
import type { OrderRequest, OrderSummaryRequest } from "~~/types/orders/orders.request";
import type { OrderResponse, OrderSummaryResponse } from "~~/types/orders/orders.response";

export const OrdersApi = {
  urlBase:  '/api/orders',
  getOrderSummary: async (summaryRequest: OrderSummaryRequest): Promise<ApiResponse<OrderSummaryResponse>> => {
    const response = await $fetch<ApiResponse<OrderSummaryResponse>>(`${OrdersApi.urlBase}/summary`, {
      method: "POST",
      body: summaryRequest,
    });
    return response;
  },
  getOrderTotal: async (request: OrderSummaryRequest): Promise<ApiResponse<number>> => {
    const response = await $fetch<ApiResponse<number>>(`${OrdersApi.urlBase}/total`, {
      method: "POST",
      body: request,
    });
    return response;
  },
  getOrders: async (
    request: OrderRequest
  ): Promise<ApiResponse<OrderResponse>> => {
    return await $fetch<ApiResponse<OrderResponse>>(
      OrdersApi.urlBase,
      {
        method: 'GET',
        query: {
          ...request
        }
      }
    )
  }
}