// server\services\auth.service.ts
import { AuthRequest } from "../../types/auth/auth.request";
import { AuthServerResponse } from "../../types/auth/auth.server.response";

function login(auth: AuthRequest): AuthServerResponse {
  const { username, password } = auth;
  console.log('auth.service.ts ', username, password);
  
  
  if (!username || !password) {
    //mock validation errors
    throw createError({
      statusCode: 400,
      statusMessage: "Username and password are required",
    });
  } else if (username !== password) {
    //mock validation errors
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid username or password",
    });
  }

  //call api external API

  return {
    user: username,
    expiresIn: 3600,
    permissions: [
      'user.logout',
      'view:dashboard',
      'view:inventory'
    ],
    token: "mock-jwt-token",
  };
}

async function getCustomer(token: string) {
  //call api external
  if(!token)
    return {}
  
  return  {
    user: 'admin',
    permissions: [
      'user.logout',
      'view:dashboard',
      'view:inventory'
    ],
  }
}

export { login, getCustomer}
// https://chatgpt.com/share/697b8d65-e13c-8010-880e-78be299eea08
