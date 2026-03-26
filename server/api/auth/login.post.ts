// server\api\auth\login.post.ts
import { login } from "../../services/auth.service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

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

  const responseData = login(body);

  if (!responseData) {
    throw createError({
      statusCode: 500,
      statusMessage: "Response data is missing",
    });
  }

  const token = responseData.data?.token;

  if (!token) {
    throw createError({
      statusCode: 500,
      statusMessage: "Token is missing",
    });
  }

  setCookie(event, "access_token", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return responseData;
});
