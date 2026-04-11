import type { filtersRequest } from '../filters.common';
import type { Status } from '../status.model';

type OrderSummaryRequest = filtersRequest;

type OrderRequest = OrderSummaryRequest & {
  status?: Status
}

export type { OrderRequest, OrderSummaryRequest };