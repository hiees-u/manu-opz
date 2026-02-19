// types\auth\auth.response.ts
export interface AuthResponse {
  user: string
  token: string
  permissions: string[]
  expiresIn: number
}