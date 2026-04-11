import { OrdersApi } from "~/services/api/orders.client";
import type { OrderRequest, OrderSummaryRequest } from "~~/types/orders/orders.request"
import type { OrderResponse, OrderSummaryResponse } from "~~/types/orders/orders.response"

const getOrderSummary = async (payload: OrderSummaryRequest): Promise<OrderSummaryResponse> => {
  const result = (await (OrdersApi.getOrderSummary(payload))).data ?? [];
  return result;
}

const getOrderTotal = async (payload: OrderSummaryRequest): Promise<number> => {
  const result = (await (OrdersApi.getOrderTotal(payload))).data ?? 0;
  return result;
}

const getOrders = async (payload: OrderRequest): Promise<OrderResponse> => {
  const result = ((await (OrdersApi.getOrders(payload))).data ?? [])
  return result;
}

export { getOrders, getOrderSummary, getOrderTotal };