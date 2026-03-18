// app\composables\useLogin.ts
import { FetchError } from "ofetch" 
import type { AuthRequest } from "~~/types/auth/auth.request";

export const useLogin = () => {
  const authStore = useAuthStore();
  const toast = useToast();

  const login = async (payload: AuthRequest) => {
    try {
      await authStore.login(payload);

      toast.add({
        title: "Login",
        color:"success",
        icon: "heroicons:check-circle",
        description: 'Login Success...',
      });
    } catch (e) {
      const err = e as FetchError;

      console.log(err);
      
      
      toast.add({
        title: "Login",
        color: "error",
        icon: "heroicons:x-circle",
        description: err.statusMessage || 'Unexpected error...',
      });
    }
  };
  return login;
};
