export const useUseLogout = () => {
  const authStore = useAuthStore();
  const toast = useToast();
  
  const logout = async () => {
    try {
      await authStore.logout();

      toast.add({
        title: "Logout",
        color:"success",
        icon: "heroicons:check-circle",
        description: 'Logout Success...',
      });

      if (!authStore.isAuthenticated) navigateTo("/login");
    } catch {
      toast.add({
        title: "Logout",
        color:"error",
        icon: "heroicons:x-circle",
        description: 'Logout Success...',
      });
    }
  };

  return logout;
}
