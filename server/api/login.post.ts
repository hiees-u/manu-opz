// server\api\login.post.ts
import { login } from '../services/auth.service'

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const responseData = login(body);

  setCookie(event, 'access_token', responseData.token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  })

  return {
    user: responseData.user,
    permissions: responseData.permissions
  };
})
