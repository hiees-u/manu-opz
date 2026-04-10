<!-- app\components\ui\BaseStatCard.vue -->
<template>
  <UCard variant="subtle" class="w-full" :ui="{ body: 'p-0 sm:p-4 relative' }">
    <p v-if="!isLoading" class="text-lg h-6">{{ title }}</p>
    <USkeleton v-else class="w-2/3 h-6 rounded-lg" />

    <p v-if="!isLoading" class="text-xl font-bold my-2">
      {{ value }} <span class="text-xs">{{ unit }}</span>
    </p>
    <USkeleton v-else class="w-1/2 h-7 rounded-lg my-2" />

    <UBadge
      :color="trendColor"
      variant="soft"
      v-if="trend !== undefined && !isLoading"
    >
      <UIcon :name="trendIcon" class="w-4 h-4 mr-1" />
      {{ trendText }}
    </UBadge>
    <USkeleton v-else class="w-3/4 h-6 rounded-lg" />

    <div
      class="rounded-lg max-w-md w-10 h-10 flex items-center justify-center absolute top-5 right-4"
    >
      <slot v-if="!isLoading" name="icon" />
      <USkeleton v-else class="w-full h-full rounded-lg" />
    </div>
  </UCard>
</template>

<script lang="ts" setup>
import { TREND_ICONS } from "~/utils/constants/icon";

interface Props {
  title: string;
  value: number | string;
  unit?: string;
  trend?: number;
  unitTrend?: string;
  trendLabel?: string;
  isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  unit: "",
  unitTrend: "",
  trendLabel: "",
  isLoading: false,
});

const { title, value, unit, trend, unitTrend, trendLabel, isLoading } =
  toRefs(props);

const trendIcon = computed(() => {
  if (trend.value === undefined) return "";
  return trend.value > 0 ? TREND_ICONS.up : TREND_ICONS.down;
});
const trendColor = computed(() => {
  if (trend.value === undefined) return undefined;
  return trend.value >= 0 ? "success" : "warning";
});

const trendText = computed(() => {
  if (trend.value === undefined) return "";
  return `${Math.abs(trend.value!)}${unitTrend.value} ${trendLabel.value}`;
});
</script>

<style></style>
