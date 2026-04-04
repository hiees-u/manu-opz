interface OrderSummaryRequest {
  date: 'today' | 'week' | 'month' | 'year';
  product: string | 'all';
}

export type { OrderSummaryRequest };