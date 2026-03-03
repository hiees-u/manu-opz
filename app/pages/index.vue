<template>
  <UContainer>
    <UiBaseStatCard
      title="Total Users"
      value="1,234"
      unit="users"
      :trend="125"
      unit-trend="%"
      trend-label="vs yesterday"
    >
      <template #icon>
        <UBadge color="success" variant="soft">
          <UIcon name="i-heroicons-chart-bar" class="w-5 h-5 text-green-600" />
        </UBadge>
      </template>
    </UiBaseStatCard>
    <br />
    <UiBaseStatCard
      title="Total Users"
      value="1,234"
      unit="users"
      :trend="-15"
      unit-trend="%"
      trend-label="vs yesterday"
    >
      <template #icon>
        <UBadge color="warning" variant="soft">
          <UIcon name="i-heroicons-chart-bar" class="w-5 h-5 text-yellow-600" />
        </UBadge>
      </template>
    </UiBaseStatCard>
  </UContainer>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
  layout: "default",
  ssr: true,
});
</script>

<style scoped></style>
