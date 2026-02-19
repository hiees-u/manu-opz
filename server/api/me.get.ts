//server\api\me.get.ts
import { getCustomer } from "../services/auth.service"

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'access_token')
  console.log('/api/me SSR => ', token);

  if(!token) {
    return null;
  }

  return await getCustomer(token);
})
