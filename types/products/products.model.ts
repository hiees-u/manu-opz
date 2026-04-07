import type { PassRateResponse } from "./products.response";

type PassRateModel = PassRateResponse & { date: string; product: string };

export type { PassRateModel };