import type { OrderSummaryResponse } from "../../types/orders/orders.response.ts";
import { OrderSummaryRequest } from "../../types/orders/orders.request";

function getOrderSummary(request: OrderSummaryRequest): OrderSummaryResponse {
  let result: OrderSummaryResponse = [
    {
      status: "Success",
      value: 16,
    },
    {
      status: "Processing",
      value: 76,
    },
    {
      status: "QC Check",
      value: 45,
    },
    {
      status: "Packing",
      value: 16,
    },
    {
      status: "Shipped",
      value: 32,
    },
    {
      status: "Delivered",
      value: 90,
    },
  ];

  if (request.date === "week") {
    result = [
      {
        status: "Success",
        value: 56,
      },
      {
        status: "Processing",
        value: 86,
      },
      {
        status: "QC Check",
        value: 15,
      },
      {
        status: "Packing",
        value: 76,
      },
      {
        status: "Shipped",
        value: 22,
      },
      {
        status: "Delivered",
        value: 80,
      },
    ];
  }

  return result;
}

export { getOrderSummary };
