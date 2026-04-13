import type { PassRateResponse } from "./products.response";

type PassRateModel = PassRateResponse & { date: string; product: string };

type ProductOutPut = {
  id: string,
  orderId: string,
  quantity: number,
  quantityDefect: number,
  date: string
}

export type { ProductOutPut, PassRateModel };