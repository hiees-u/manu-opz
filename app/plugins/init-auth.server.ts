// app\plugins\init-auth.server.ts
export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();
  const headers = useRequestHeaders(["cookie"]);
  try {
    const me = await $fetch("/api/auth/me", { headers });
    auth.setLogin(me as AuthResponse);
  } catch {
    auth.clear();
  }
});
