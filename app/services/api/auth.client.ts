// app\services\api\auth.client.ts

import type { ApiResponse } from "~~/types/api.response";
import type { AuthRequest } from "~~/types/auth/auth.request";
import type { AuthResponse } from "~~/types/auth/auth.response";

export const AuthApi = {
  login: async (request: AuthRequest): Promise<ApiResponse<AuthResponse>> => {
    const response = await $fetch<ApiResponse<AuthResponse>>("/api/auth/login", {
      method: "POST",
      body: request,
    });
    logCustomer(response)
    return response;
  },
  logout: async (): Promise<{}> => {
    const response = await $fetch<{}>("/api/auth/logout", {
      method: "POST"
    });
    logCustomer(response);
    return response;
  }
};
