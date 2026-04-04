interface OrderSummaryRequest {
  date: 'today' | 'week' | 'month' | 'year' | string;
  product: string | 'all';
}

export type { OrderSummaryRequest };