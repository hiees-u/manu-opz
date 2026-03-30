<template>
  <div class="wrapper">
    <BannerLoginSkeletonVue v-if="!mount" />
    <NuxtImg v-else src="/images/banner-login/banner-login.png" :width="500" alt="Logo" preload priority fetchpriority="high"/>
    <LoginForm @submit="handleLogin" />
  </div>
</template>

<script lang="ts" setup>
import LoginForm from "~/components/form/LoginForm.vue";
import BannerLoginSkeletonVue from "~/components/skeletons/BannerLoginSkeleton.vue.vue";
import type { AuthRequest } from "~~/types/auth/auth.request";

definePageMeta({
  middleware: 'guest',
  layout: 'auth'
})

const authStore = useAuthStore();

const mount = ref(false);
const login = useLogin();

const handleLogin = async(data: AuthRequest) => {
  await login(data);
  logCustomer(authStore.isAuthenticated);
  if (authStore.isAuthenticated) navigateTo("/");
}

onMounted(() => {
  mount.value = true;
})
</script>

<style scoped>
.wrapper {
  gap: 50px;
  width: 100%;
  height: 90%;
  margin: auto;
  display: flex;
  max-width: 1200px;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  background-color: #f5f5f5;
}
</style>
