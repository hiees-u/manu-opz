// types\category\category.request.ts

import type { Category } from "./category.model";

export interface CategoryRequest {
  filters: Partial<Category>,
  page: number;
  pageSize?: number;
  cursor?: string
}