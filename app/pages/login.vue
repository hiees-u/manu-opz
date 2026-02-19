<template>
  <div class="wrapper">
    <BannerLoginSkeletonVue v-if="!mount" />
    <NuxtImg v-else src="/images/banner-login/banner-login.png" :width="500" alt="Logo" preload priority/>
    <LoginForm />
  </div>
</template>

<script lang="ts" setup>
import LoginForm from "~/components/form/LoginForm.vue";
import BannerLoginSkeletonVue from "~/components/skeletons/BannerLoginSkeleton.vue.vue";

definePageMeta({
  middleware: 'guest',
})

const mount = ref(false);

onMounted(() => {
  setTimeout(() => {
    mount.value = true;
  }, 200)
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
