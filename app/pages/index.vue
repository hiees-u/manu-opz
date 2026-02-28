<template>
  <h1>HIU</h1>
  <!-- <UHeader>
    <template #left>
      {{ projectName }}
    </template>
    <template #right>
      MIN
    </template>
  </UHeader> -->
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  layout: 'default',
  ssr: true,
});
const { projectName } = useRuntimeConfig().public;
</script>

<style scoped>
</style>
