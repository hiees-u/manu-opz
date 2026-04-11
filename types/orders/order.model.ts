import type { Status } from '../status.model'

type Order = {
  id: string
  date: string // ISO 8601
  status: Status
  amount: number
  currency: 'USD' | 'VND'

  customerName: string
  itemsCount: number

  createdAt: string
  updatedAt: string
}
interface OrderSummary {
  status: string;
  value: number;
}

export type { OrderSummary, Order };