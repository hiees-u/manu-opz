// server\services\auth.service.ts
import type { ApiResponse } from "../../types/api.response";
import { AuthRequest } from "../../types/auth/auth.request";
import { AuthServerResponse } from "../../types/auth/auth.server.response";

function login(auth: AuthRequest): ApiResponse<AuthServerResponse> {
  const { username, password } = auth;
  console.log("auth.service.ts ", username, password);

  //call api external API

  const response: ApiResponse<AuthServerResponse> = {
    data: {
      user: username,
      expiresIn: 3600,
      permissions: ["user.logout", "view:dashboard", "view:production", "view:quality-control", "view:inventory", "view:order", "view:logistics", "view:reports", "view:system"],
      token: "mock-jwt-token",
    },
    success: true,
  };

  return response;
}

async function getCustomer(token: string) {
  //call api external
  if (!token) return {};

  return {
    user: "admin",
    permissions: ["user.logout", "view:dashboard", "view:production", "view:quality-control", "view:inventory", "view:order", "view:logistics", "view:reports", "view:system"],
  };
}

export { login, getCustomer };
