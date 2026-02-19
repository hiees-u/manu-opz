<template>
  <div class="wrapper">
    <UiSideBarComponent></UiSideBarComponent>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  ssr: true,
});
</script>

<style>
.wrapper {
  width: 100%;
}
</style>
