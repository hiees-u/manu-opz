<template>
  <UContainer>
    <div class="grid grid-cols-5 grid-rows-[130px_130px_250px] gap-5">
      <div class="col-span-1 row-span-1">
        <UiBaseStatCard
          title="Total's Orders"
          value="245"
          unit="units"
          :trend="12.5"
          unit-trend="%"
          trend-label="vs yesterday"
          :is-loading="!mounted"
        >
          <template #icon>
            <UBadge color="success" variant="soft">
              <UIcon
                name="material-symbols:orders-outline-rounded"
                class="w-5 h-5 text-green-600"
              />
            </UBadge>
          </template>
        </UiBaseStatCard>
      </div>
      <div class="col-span-1 row-span-1">
        <UiBaseStatCard
          title="Daily Revenue"
          value="$48.5"
          unit="K"
          :trend="0.3"
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
      <div class="col-span-1 row-span-1">
        <UiBaseStatCard
          title="On-time Rate"
          value="92.2"
          unit="%"
          :trend="5.7"
          unit-trend="%"
          trend-label="vs yesterday"
          :is-loading="!mounted"
        >
          <template #icon>
            <UBadge color="success" variant="soft">
              <UIcon
                name="ic:twotone-watch-later"
                class="w-5 h-5 text-green-600"
              />
            </UBadge>
          </template>
        </UiBaseStatCard>
      </div>
      <div class="col-span-2 row-span-2">
        <UiBusinessPerformanceWidgetComponent :is-loading="!mounted" />
      </div>
      <div class="col-span-1 row-span-1">
        <UiBaseStatCard
          title="Production Output"
          value="1,235"
          unit="units"
          :trend="-3.2"
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
      <div class="col-span-1 row-span-1">
        <UiBaseStatCard
          title="Delayed Orders"
          value="18"
          unit="orders"
          :trend="-3.2"
          unit-trend="%"
          trend-label="vs yesterday"
          :is-loading="!mounted"
        >
          <template #icon>
            <UBadge color="error" variant="soft">
              <UIcon
                name="tabler:truck-delivery"
                class="w-5 h-5 text-red-500"
              />
            </UBadge>
          </template>
        </UiBaseStatCard>
      </div>
      <div class="col-span-1 row-span-1">
        <UiBaseStatCard
          title="Defect Rate"
          value="5.5"
          unit="%"
          :trend="-15.5"
          unit-trend="%"
          trend-label="vs yesterday"
          :is-loading="!mounted"
        >
          <template #icon>
            <UBadge color="warning" variant="soft">
              <UIcon
                name="fluent:line-horizontal-5-error-20-filled"
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
        <UiPassRateGaugeComponent :is-loading="!mounted" :processing="94.5" />
      </div>
      <div class="col-span-2 row-span-2">
        <UiOrderPipelineStatusCardComponent :is-loading="!mounted" :revenue="revenue" />
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

const revenue = ref([
  { status: "Pending", value: 100 },
  { status: "Processing", value: 90 },
  { status: "QC Check", value: 50 },
  { status: "Packaging", value: 15 },
  { status: "Shipped", value: 77 },
  { status: "Delivered", value: 89 },
]);

onMounted(() => {
  mounted.value = true;
});
</script>

<style scoped></style>
