<!-- app/components/form/LoginFormSkeleton.vue -->
<template>
  <div class="wrapper-form animate-pulse">
    <!-- Header -->
    <div class="h-10 w-24 bg-gray-300 rounded mb-2 mx-2"></div>

    <!-- Sub header -->
    <div class="h-14 w-auto bg-gray-200 rounded mb-4 mx-2"></div>

    <!-- Input 1 -->
    <div class="h-10 w-auto bg-gray-200 rounded my-3 mx-2"></div>

    <!-- Input 2 -->
    <div class="h-10 w-auto bg-gray-200 rounded my-3 mx-2"></div>

    <!-- Button -->
    <div class="h-10 w-auto bg-gray-300 rounded mx-3 mt-2"></div>
  </div>
</template>

<style scoped>
.wrapper-form {
  width: 300px;
  display: flex;
  flex-direction: column;
}
</style>
