// types\api.response.ts
export interface ApiResponse<T> {
  data: T | null
  success: boolean
  message?: string
  errorCode?: number
}
