//middleware\auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  console.log('TỚI: ', to.name);
  console.log('TỪ ', from.name);
  

  if (!authStore.isAuthenticated) {
    return navigateTo('/login')
  }
});