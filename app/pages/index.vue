<template>
  <div class="wrapper">
    <h1>Home Page</h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  layout: 'default',
  ssr: true,
});
</script>

<style>
.wrapper {
  width: 100%;
}
</style>
