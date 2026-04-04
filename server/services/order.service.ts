import type { OrderSummaryResponse } from "../../types/orders/orders.response.ts";
import { OrderSummaryRequest } from "../../types/orders/orders.request";

function getOrderSummary(request: OrderSummaryRequest): OrderSummaryResponse {

  const result: OrderSummaryResponse = [{
    status: "Success",
    value: 16,
  }, {
    status: "Processing",
    value: 76,
  }, {
    status: "QC Check",
    value: 45,
  }, {
    status: "Packing",
    value: 16,
  }, {
    status: "Shipped",
    value: 32,
  }, {
    status: "Delivered",
    value: 90,
  }];

  return result;
}

export { getOrderSummary };