import type { OrderSummaryResponse } from "../../types/orders/orders.response.ts";
import { OrderSummaryRequest } from "../../types/orders/orders.request";

// Gom dữ liệu mock vào một Object để quản lý cho gọn
const mockDataOrderPipe: Record<NonNullable<OrderSummaryRequest["date"]>, OrderSummaryResponse> = {
  today: [
    { status: "Success", value: 16 },
    { status: "Processing", value: 76 },
    { status: "QC Check", value: 45 },
    { status: "Packing", value: 16 },
    { status: "Shipped", value: 32 },
    { status: "Delivered", value: 90 },
  ],
  week: [
    { status: "Success", value: 56 },
    { status: "Processing", value: 86 },
    { status: "QC Check", value: 15 },
    { status: "Packing", value: 76 },
    { status: "Shipped", value: 22 },
    { status: "Delivered", value: 80 },
  ],
  month: [
    { status: "Success", value: 45 },
    { status: "Processing", value: 60 },
    { status: "QC Check", value: 25 },
    { status: "Packing", value: 30 },
    { status: "Shipped", value: 55 },
    { status: "Delivered", value: 70 },
  ],
  year: [
    { status: "Success", value: 85 },
    { status: "Processing", value: 95 },
    { status: "QC Check", value: 40 },
    { status: "Packing", value: 50 },
    { status: "Shipped", value: 65 },
    { status: "Delivered", value: 99 },
  ],
};

const mockDataOrderTotal: Record<NonNullable<OrderSummaryRequest["date"]>, number> = {
  today: 275,
  week: 375,
  month: 285,
  year: 975,
};

function getOrderSummary(request: OrderSummaryRequest): OrderSummaryResponse {
  // Trả về dữ liệu tương ứng hoặc mảng rỗng nếu không khớp
  return mockDataOrderPipe[request.date ?? "today"] || [];
}

function getOrderTotal(request: OrderSummaryRequest): number {
  console.log('PAYLOAD SERVICE: ', request);

  return mockDataOrderTotal[request.date ?? "today"] || 0;
}

export { getOrderSummary, getOrderTotal };