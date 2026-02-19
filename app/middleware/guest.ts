// middleware/login.ts
export default defineNuxtRouteMiddleware( async (to, from) => {
  const auth = useAuthStore()
  const toast = useToast()
  if (to.name === 'login' && auth.isAuthenticated) {
    toast.add({
      title: 'Login',
      color: 'error',
      icon: 'heroicons:x-circle',
      description: 'You’re already logged in. No need to log in again.'
    })
    
    return navigateTo(from.fullPath || '')
  }
})