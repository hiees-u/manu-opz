<template>
  <div>
    <template v-if="isLoading">
      <div class="mb-4">
        <USkeleton class="w-1/3 h-6 mb-2 rounded-lg" />
        <USkeleton class="w-full h-40 rounded-lg" />
      </div>
    </template>
    <template v-else>
      <LineChart
        :data="chartData"
        :height="250"
        y-label="Top 3 Critical Alerts"
        :x-num-ticks="4"
        :y-num-ticks="4"
        :categories="categories"
        :x-formatter="xFormatter"
        :y-grid-line="true"
        :curve-type="CurveType.Linear"
        :legend-position="LegendPosition.TopRight"
        :hide-legend="false"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  tags: ["linecharts", "multilineslinear"],
});

interface Props {
  isLoading: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
});

const { isLoading } = toRefs(props);

const chartData = [
  {
    date: "Jan",
    revenue: 12300,
    cost: 8000,
    profit: 3500,
  },
  {
    date: "Feb",
    revenue: 12800,
    cost: 9000,
    profit: 3900,
  },
  {
    date: "Mar",
    revenue: 12500,
    cost: 8000,
    profit: 3900,
  },
  {
    date: "Apr",
    revenue: 13000,
    cost: 8200,
    profit: 4500,
  },
  {
    date: "May",
    revenue: 13500,
    cost: 8800,
    profit: 4800,
  },
  {
    date: "Jun",
    revenue: 13200,
    cost: 8400,
    profit: 4500,
  },
];

const categories: Record<string, BulletLegendItemInterface> = {
  revenue: { name: "Revenue", color: "blue" },
  cost: { name: "Cost", color: "orange" },
  profit: { name: "Profit", color: "green" },
};

const xFormatter = (tick: number, _i?: number, _ticks?: number[]): string => {
  return String(chartData[tick]?.date ?? "");
};
</script>

<style></style>
