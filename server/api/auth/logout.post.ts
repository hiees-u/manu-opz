// server\api\logout.post.ts
export default defineEventHandler(async (event) => {
  deleteCookie(event, 'access_token', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  })

  return {
    isSuccess: true,
  }
})
