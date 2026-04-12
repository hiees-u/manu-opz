import type { ProductOutPut } from "./products.model";

type PassRateResponse = {
  total: number;
  pass: number;
  passRate: number;
};

type ProductOutPutResponse = ProductOutPut[];

export type { ProductOutPutResponse, PassRateResponse };