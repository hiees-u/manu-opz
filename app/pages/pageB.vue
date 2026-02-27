<template>
  <div class="wrapper">
    <h1>HIU DEP TRAI</h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  layout: 'default',
  ssr: true,
});
</script>

<style scoped>
.wrapper {
  width: 100%;
}
</style>