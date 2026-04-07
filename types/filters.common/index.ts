export interface filtersRequest {
  date?: 'today' | 'week' | 'month' | 'year' | string;
  cate?: string | 'all';
}
