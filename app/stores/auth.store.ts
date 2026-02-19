import { AuthApi } from "~/services/api/auth.client";
import type { AuthResponse } from "~~/types/auth/auth.response";
import type { AuthRequest } from "~~/types/auth/auth.request";
import type { Permission } from "~/utils/types/permission";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<AuthResponse | null>(null);

  const isAuthenticated = computed(() => user.value != null);

  const login = async (credentials: AuthRequest) => {
    try {
      const response = await AuthApi.login(credentials);
      logCustomer();
      user.value = response;
      return response;
    } catch (error) {
      user.value = null;
      throw error;
    }
  };

  const hasPermission = (p: Permission) => user.value?.permissions.includes(p);

  const setLogin =(me: AuthResponse) => {
    user.value = me;
  }

  const clear = () => {
    user.value = null;
  }

  return {
    user,
    login,
    clear,
    setLogin,
    isAuthenticated,
    hasPermission
  };
});
