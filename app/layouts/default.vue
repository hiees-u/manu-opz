<!-- layouts\default.vue -->
<template>
  <div class="wrapper-layout">
    <UiSideBarComponent></UiSideBarComponent>
    <div class="wrapper-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

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
  display: flex;
  padding: 25px;
  justify-content: center;
}
</style>