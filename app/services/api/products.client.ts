import type { ApiResponse } from '~~/types/api.response'
import type { CategoryRequest } from '~~/types/category/category.request'
import type { Category } from '~~/types/category/category.model'

export const ProductsApi = {
  getCategorys: async (payload: CategoryRequest): Promise<ApiResponse<Category[]>> => {
    const result = await $fetch('/api/products/category', {
      method: 'POST',
      body: payload
    })

    return result;
  }
}