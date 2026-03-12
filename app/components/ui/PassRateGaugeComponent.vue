<!-- app\components\ui\PassRateGaugeComponent.vue -->
<template>
  <UContainer class="flex flex-col items-center justify-center gap-5">
    <template v-if="!isLoading">
      <p class="text-lg">Gauge for Pass Rate</p>
      <DonutChart
        :data="data.map((i) => i.percentage)"
        :height="150"
        :categories="categories"
        :hide-legend="true"
        :type="DonutType.Full"
        :radius="0"
      >
        <div class="text-center">
          <div class="font-bold text-2xl text-green-950">75%</div>
        </div>
      </DonutChart>
      <div class="w-full flex justify-end">
        <UBadge color="secondary"><button>See Details</button></UBadge>
      </div>
    </template>
    <template v-else>
      <USkeleton class="w-full h-8 mb-5 rounded-lg" />
      <USkeleton class="w-[85%] aspect-square rounded-full" />
      <USkeleton class="ml-auto w-10 h-5 mb-5 rounded-lg" />
    </template>
  </UContainer>
</template>

<script lang="ts" setup>
interface Props {
  isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
});

const { isLoading } = toRefs(props);

const data = [
  { name: 'NotStarted', percentage: 25 },
  { name: 'Processing', percentage: 75 },
]

const categories = {
  NotStarted: {
    name: 'Not Started',
    color: 'var(--color-green-300)'
  },
  Processing: {
    name: 'Processing',
    color: 'var(--color-green-400)'
  },
}
</script>

<style></style>
