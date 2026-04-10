<!-- app\components\ui\OrderPipelineStatusCardComponent.vue -->
<script lang="ts" setup>
import type { OrderSummaryResponse } from "~~/types/orders/orders.response";

defineOptions({
  tags: ["barcharts", "vertical"],
});

interface Props {
  isLoading: boolean;
  revenue: OrderSummaryResponse;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  revenue: () => [
    { status: "Success", value: 0 },
    { status: "Processing", value: 0 },
    { status: "QC Check", value: 0 },
    { status: "Packing", value: 0 },
    { status: "Shipped", value: 0 },
    { status: "Delivered", value: 0 },
  ],
});

const { revenue } = toRefs(props);

const RevenueCategories = computed(() => ({
  desktop: {
    name: "Order Pipeline Status",
    color: "#22c55e",
  },
}));

const xFormatter = (i: number): string => `${revenue.value[i]?.status}`;
const yFormatter = (tick: number) => tick.toString();

const { isLoading } = toRefs(props);
</script>

<template>
  <UContainer class="px-0 h-full sm:px-0 lg:px-0">
    <template v-if="!isLoading">
      <div class="flex flex-col justify-between w-full h-full">
        <BarChart
          :data="revenue"
          :height="200"
          :categories="RevenueCategories"
          :y-axis="['value']"
          :x-num-ticks="6"
          :radius="4"
          :y-grid-line="true"
          :x-formatter="xFormatter"
          :y-formatter="yFormatter"
          :legend-position="LegendPosition.TopRight"
          :hide-legend="false"
        />
        <div class="w-full flex justify-end mt-5">
          <UBadge color="secondary"
            ><button class="cursor-pointer">See Details</button></UBadge
          >
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex justify-end">
        <USkeleton class="w-40 h-3 mb-5 rounded-lg" />
      </div>
      <div class="flex justify-evenly max-h-50 h-full">
        <div></div>
        <USkeleton class="w-13 h-45 rounded-lg" />
        <USkeleton class="w-13 h-45 rounded-lg" />
        <USkeleton class="w-13 h-45 rounded-lg" />
        <USkeleton class="w-13 h-45 rounded-lg" />
        <USkeleton class="w-13 h-45 rounded-lg" />
        <USkeleton class="w-13 h-45 rounded-lg" />
      </div>
      <USkeleton class="ml-auto w-20 h-7 mt-3 mb-2 me-3 rounded-lg" />
    </template>
  </UContainer>
</template>
