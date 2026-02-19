// middleware/login.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log(`guest.ts: ${from.path} -> ${to.path}`);
  const auth = useAuthStore();
  const toast = useToast();

  if (to.path === "/login" && auth.isAuthenticated) {
    toast.add({
      title: "Login",
      color: "error",
      icon: "heroicons:x-circle",
      description: "You’re already logged in. No need to log in again.",
    });

    return navigateTo(from.fullPath || "");
  }
});
