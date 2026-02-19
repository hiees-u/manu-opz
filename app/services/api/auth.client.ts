// app\services\api\auth.client.ts

import type { AuthRequest } from "~~/types/auth/auth.request";
import type { AuthResponse } from "~~/types/auth/auth.response";

export const AuthApi = {
  login: async (request: AuthRequest): Promise<AuthResponse> => {
    const response = await $fetch<AuthResponse>("/api/auth/login", {
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
