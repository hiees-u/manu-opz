//middleware\auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  logCustomer();
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated) {
    return navigateTo('/login')
  }
});