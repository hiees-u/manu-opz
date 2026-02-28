<!-- layouts\default.vue -->
<template>
  <div class="wrapper-layout">
    <UiSideBarComponent></UiSideBarComponent>
    <div class="wrapper-content">
      <UHeader :ui="{ root: 'mb-5', left: 'd-flex flex-col items-start' }">
        <template #left>
          <h1>{{ config.public.projectName }}</h1>
          <p class="text-xs">Optimizing Manufacturing Intelligence.</p>
        </template>
        <template #right>
          <ClientOnly><UBadge>{{ dateTimeNow }}</UBadge></ClientOnly>
          <UColorModeButton />
        </template>
      </UHeader>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const dateTimeNow = useClock().dateTimeNow;
</script>

<style scoped>
.wrapper-layout {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  min-width: 900px;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 100vw;
  min-height: 100vh;
  justify-content: center;
}

.wrapper-content {
  width: 100%;
  height: 100%;
  padding: 5px 25px 25px;
}
</style>