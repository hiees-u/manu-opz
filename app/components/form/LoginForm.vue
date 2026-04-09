<!-- app\components\form\LoginForm.vue -->
<template>
  <LoginFormSkeleton v-if="!mounted" />
  <div v-else class="wrapper-form">
    <h2 class="header">Login</h2>
    <p class="sub-header">
      Log in with your data that you entered during your registration
    </p>
    <UiBaseInput
      v-model="userRequest.username"
      type="text"
      name="User Name"
      :show-button-reset="true"
      :input-background="'#f5f5f5'"
      :place-holder="'Enter your user name...'"
      :tab-index="1"
    ></UiBaseInput>
    <UiBaseInput
      v-model="userRequest.password"
      type="password"
      name="Password"
      :show-button-reset="true"
      :input-background="'#f5f5f5'"
      :show-button-password="true"
      :place-holder="'Enter your password...'"
      :tab-index="2"
    ></UiBaseInput>
    <button class="login-button" @click="onSubmit">Login</button>
  </div>
</template>

<script lang="ts" setup>
import type { AuthRequest } from "~~/types/auth/auth.request";
import LoginFormSkeleton from "../skeletons/LoginFormSkeleton.vue";

const emit = defineEmits(['submit']);
const mounted = ref(false);
const userRequest = reactive<AuthRequest>({ username: "", password: "" });

const onSubmit = () => {
  emit('submit', userRequest);
}

onMounted(() => {
  mounted.value = true;
});
</script>

<style scoped>
.wrapper-form {
  width: 300px;
  display: flex;
  height: fit-content;
  flex-direction: column;
}

.header {
  font-size: 24px;
  font-weight: 600;
  color: #1500ff;
  margin: 0 0 10px 0px;
  padding-left: 10px;
}

.sub-header {
  font-size: 14px;
  font-weight: 400;
  color: #606060;
  margin: 0 0 30px 0;
  padding-left: 10px;
}

.login-button {
  margin: 10px auto 0 auto;
  padding: 10px;
  background-color: #1500ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: calc(100% - 20px);
}
</style>
