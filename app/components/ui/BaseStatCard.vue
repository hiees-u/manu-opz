<!-- app\components\ui\BaseStatCard.vue -->
<template>
  <UCard variant="subtle" class="w-50" :ui="{ body: 'p-0 sm:p-4 relative' }">
    <p class="text-lg">{{ title }}</p>
    <p class="text-2xl font-bold my-2">
      {{ value }} <span class="text-xs">{{ unit }}</span>
    </p>
    <UBadge :color="trendColor" variant="soft" v-if="trend !== undefined">
      <UIcon :name="trendIcon" class="w-4 h-4 mr-1" />
      {{ trendText }}
    </UBadge>
    <div
      class="p-3 rounded-lg max-w-md w-10 h-10 flex items-center justify-center absolute top-5 right-5"
    >
      <slot name="icon" />
    </div>
  </UCard>
</template>

<script lang="ts" setup>
import { TREND_ICONS } from "~/utils/types/icon";

interface Props {
  title: string;
  value: number | string;
  unit?: string;
  trend?: number;
  unitTrend?: string;
  trendLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  unit: "",
  unitTrend: "",
  trendLabel: "",
});

const { title, value, unit, trend, unitTrend, trendLabel } = toRefs(props);

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
