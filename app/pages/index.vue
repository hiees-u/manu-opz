<template>
  <UContainer>
    <div class="grid grid-cols-5 grid-rows-[130px_130px_250px] gap-5">
      <div class="col-span-1 row-span-1">
        <UiBaseStatCard
          title="Total Users"
          value="1,234"
          unit="users"
          :trend="125"
          unit-trend="%"
          trend-label="vs yesterday"
          :is-loading="!mounted"
        >
          <template #icon>
            <UBadge color="success" variant="soft">
              <UIcon
                name="i-heroicons-chart-bar"
                class="w-5 h-5 text-green-600"
              />
            </UBadge>
          </template>
        </UiBaseStatCard>
      </div>
      <div class="">
        <UiBaseStatCard
          title="Total Users"
          value="1,234"
          unit="users"
          :trend="-15"
          unit-trend="%"
          trend-label="vs yesterday"
          :is-loading="!mounted"
        >
          <template #icon>
            <UBadge color="warning" variant="soft">
              <UIcon
                name="i-heroicons-chart-bar"
                class="w-5 h-5 text-yellow-600"
              />
            </UBadge>
          </template>
        </UiBaseStatCard>
      </div>
      <div class="">
        <UiBaseStatCard
          title="Total Users"
          value="1,234"
          unit="users"
          :trend="-15"
          unit-trend="%"
          trend-label="vs yesterday"
          :is-loading="!mounted"
        >
          <template #icon>
            <UBadge color="warning" variant="soft">
              <UIcon
                name="i-heroicons-chart-bar"
                class="w-5 h-5 text-yellow-600"
              />
            </UBadge>
          </template>
        </UiBaseStatCard>
      </div>
      <div class="col-span-2 row-span-2">
        <USkeleton class="w-full h-full" />
      </div>
      <div class="">
        <UiBaseStatCard
          title="Total Users"
          value="1,234"
          unit="users"
          :trend="-15"
          unit-trend="%"
          trend-label="vs yesterday"
          :is-loading="!mounted"
        >
          <template #icon>
            <UBadge color="warning" variant="soft">
              <UIcon
                name="i-heroicons-chart-bar"
                class="w-5 h-5 text-yellow-600"
              />
            </UBadge>
          </template>
        </UiBaseStatCard>
      </div>
      <div class="">
        <UiBaseStatCard
          title="Total Users"
          value="1,234"
          unit="users"
          :trend="-15"
          unit-trend="%"
          trend-label="vs yesterday"
          :is-loading="!mounted"
        >
          <template #icon>
            <UBadge color="warning" variant="soft">
              <UIcon
                name="i-heroicons-chart-bar"
                class="w-5 h-5 text-yellow-600"
              />
            </UBadge>
          </template>
        </UiBaseStatCard>
      </div>
      <div class="">
        <UiBaseStatCard
          title="Total Users"
          value="1,234"
          unit="users"
          :trend="-15"
          unit-trend="%"
          trend-label="vs yesterday"
          :is-loading="!mounted"
        >
          <template #icon>
            <UBadge color="warning" variant="soft">
              <UIcon
                name="i-heroicons-chart-bar"
                class="w-5 h-5 text-yellow-600"
              />
            </UBadge>
          </template>
        </UiBaseStatCard>
      </div>
      <div class="col-span-2 row-span-4">
        <UiOEEOverrideComponent
          :oee="85"
          :avail="90"
          :perf="80"
          :qual="95"
          :trend="-2"
        />
      </div>
      <div class="col-span-1 row-span-2">
        <UiPassRateGaugeComponent :is-loading="!mounted" />
      </div>
      <div class="col-span-2 row-span-2">
        <USkeleton class="w-full h-[70%]" />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
  layout: "default",
  ssr: true,
});

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<style scoped></style>
