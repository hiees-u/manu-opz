<template>
  <div class="wrapper-layout">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
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
</style>