import type { OrderResponse, OrderSummaryResponse } from "../../types/orders/orders.response.ts";
import { OrderRequest, OrderSummaryRequest } from "../../types/orders/orders.request";
import { Order } from "~~/types/orders/order.model.js";

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

export const OrderMockData: Order[] = [
  {
    id: 'ORD-001',
    date: '2026-04-10T08:30:00Z',
    status: 'completed',
    amount: 150,
    currency: 'USD',
    customerName: 'John Smith',
    itemsCount: 3,
    createdAt: '2026-04-10T08:00:00Z',
    updatedAt: 'today'
  },
  {
    id: 'ORD-002',
    date: '2026-04-09T10:15:00Z',
    status: 'completed',
    amount: 320,
    currency: 'USD',
    customerName: 'Emily Johnson',
    itemsCount: 5,
    createdAt: '2026-04-09T09:50:00Z',
    updatedAt: 'week'
  },
  {
    id: 'ORD-003',
    date: '2026-04-08T14:00:00Z',
    status: 'completed',
    amount: 210,
    currency: 'USD',
    customerName: 'Michael Brown',
    itemsCount: 2,
    createdAt: '2026-04-08T13:30:00Z',
    updatedAt: 'year'
  },
  {
    id: 'ORD-004',
    date: '2026-04-07T16:45:00Z',
    status: 'completed',
    amount: 99,
    currency: 'USD',
    customerName: 'Sarah Davis',
    itemsCount: 1,
    createdAt: '2026-04-07T16:00:00Z',
    updatedAt: 'month'
  },
  {
    id: 'ORD-005',
    date: '2026-04-06T12:20:00Z',
    status: 'completed',
    amount: 450,
    currency: 'USD',
    customerName: 'David Wilson',
    itemsCount: 6,
    createdAt: '2026-04-06T11:50:00Z',
    updatedAt: 'today'
  },
  {
    id: 'ORD-006',
    date: '2026-04-10T08:30:00Z',
    status: 'completed',
    amount: 100,
    currency: 'USD',
    customerName: 'John Smith',
    itemsCount: 3,
    createdAt: '2026-04-10T08:00:00Z',
    updatedAt: 'today-1'
  },
  {
    id: 'ORD-007',
    date: '2026-04-09T10:15:00Z',
    status: 'completed',
    amount: 220,
    currency: 'USD',
    customerName: 'Emily Johnson',
    itemsCount: 5,
    createdAt: '2026-04-09T09:50:00Z',
    updatedAt: 'week-1'
  },
  {
    id: 'ORD-008',
    date: '2026-04-08T14:00:00Z',
    status: 'completed',
    amount: 410,
    currency: 'USD',
    customerName: 'Michael Brown',
    itemsCount: 2,
    createdAt: '2026-04-08T13:30:00Z',
    updatedAt: 'year-1'
  },
  {
    id: 'ORD-009',
    date: '2026-04-07T16:45:00Z',
    status: 'completed',
    amount: 120,
    currency: 'USD',
    customerName: 'Sarah Davis',
    itemsCount: 1,
    createdAt: '2026-04-07T16:00:00Z',
    updatedAt: 'month-1'
  },
  {
    id: 'ORD-005',
    date: '2026-04-06T12:20:00Z',
    status: 'completed',
    amount: 350,
    currency: 'USD',
    customerName: 'David Wilson',
    itemsCount: 6,
    createdAt: '2026-04-06T11:50:00Z',
    updatedAt: 'today-1'
  }
]

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
  return mockDataOrderTotal[request.date ?? "today"] || 0;
}

function getOrders(request: OrderRequest): OrderResponse {
  const { date, cate, status } = request;

  console.log('ORDER GET: ', date, cate, status);
  

  let result = OrderMockData;

  if(date || cate || status) {
    result = result.filter(item => {
        return (status && item.status === status) && (date ? item.updatedAt === date : true);
      })
  }

  console.log('ORDER GET RESPONE: ', result);
  

  return result;
}

export { getOrders, getOrderSummary, getOrderTotal };