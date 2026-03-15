<!-- app\components\ui\OrderPipelineStatusCardComponent.vue -->
<script lang="ts" setup>
defineOptions({
  tags: ["barcharts", "vertical"],
});

interface Props {
  isLoading: boolean;
  revenue: RevenueDataItem[];
}

interface RevenueDataItem {
  status: string;
  value: number;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  revenue: () => [
    { status: "Pending", value: 100 },
    { status: "Processing", value: 90 },
    { status: "QC Check", value: 50 },
    { status: "Packaging", value: 15 },
    { status: "Shipped", value: 77 },
    { status: "Delivered", value: 89 },
  ],
});

const RevenueData: RevenueDataItem[] = props.revenue;

const RevenueCategories = computed(() => ({
  desktop: {
    name: "Order Pipeline Status",
    color: "#22c55e",
  },
}));

const xFormatter = (i: number): string => `${RevenueData[i]?.status}`;
const yFormatter = (tick: number) => tick.toString();

const { isLoading } = toRefs(props);
</script>

<template>
  <UContainer class="px-0 sm:px-0 lg:px-0">
    <template v-if="!isLoading">
      <BarChart
        :data="RevenueData"
        :height="185"
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
        <UBadge color="secondary"><button>See Details</button></UBadge>
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
