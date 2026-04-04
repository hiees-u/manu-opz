import { OrdersApi } from "~/services/api/orders.client";
import type { OrderSummaryRequest } from "~~/types/orders/orders.request"
import type { OrderSummaryResponse } from "~~/types/orders/orders.response"

const getOrderSummary = async (payload: OrderSummaryRequest): Promise<OrderSummaryResponse> => {
  const result = (await (OrdersApi.getOrderSummary(payload))).data ?? [];
  return result;
}

export { getOrderSummary };