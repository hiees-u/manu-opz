// app\services\api\auth.client.ts

import type { AuthRequest } from "~~/types/auth/auth.request";
import type { AuthResponse } from "~~/types/auth/auth.response";

export const AuthApi = {
  me: async () => {
    const response = await $fetch<string[]>("/api/me", {
      method: "GET"
    });
    logCustomer(response);
    return response;
  },
  login: async (request: AuthRequest): Promise<AuthResponse> => {
    const response = await $fetch<AuthResponse>("/api/login", {
      method: "POST",
      body: request,
    });
    logCustomer(response)
    return response;
  },
};
