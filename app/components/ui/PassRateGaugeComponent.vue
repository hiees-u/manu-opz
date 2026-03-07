<template>
  <UiContainer class="flex flex-col items-center justify-center gap-5">
    <USkeleton class="w-full h-8 mb-5 rounded-lg" />
    <USkeleton class="w-[85%] aspect-square rounded-full" />
    <USkeleton class="ml-auto w-10 h-5 mb-5 rounded-lg" />
  </UiContainer>
</template>

<script lang="ts" setup>
const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<style>

</style>