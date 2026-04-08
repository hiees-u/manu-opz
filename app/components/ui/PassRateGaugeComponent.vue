<!-- app\components\ui\PassRateGaugeComponent.vue -->
<template>
  <UContainer class="flex flex-col items-center justify-center gap-5">
    <template v-if="!isLoading">
      <p class="text-lg">Gauge for Pass Rate</p>
      <DonutChart
        class="[--vis-donut-background-color:transparent]"
        :data="data.map((i) => i.percentage)"
        :categories="categories"
        :height="155"
        :radius="80"
        :pad-angle="0.1"
        :arc-width="20"
      >
        <div class="text-center">
          <div class="font-bold text-2xl text-green-950 dark:text-white">
            {{ processing }}%
          </div>
        </div>
      </DonutChart>
      <div class="w-full flex justify-end">
        <UBadge color="secondary"
          ><button class="cursor-pointer">See Details</button></UBadge
        >
      </div>
    </template>
    <template v-else>
      <USkeleton class="w-full h-8 mb-2 rounded-lg" />
      <USkeleton class="w-35 h-35 aspect-square rounded-full" />
      <USkeleton class="ml-auto w-20 h-7 mb-5 rounded-lg" />
    </template>
  </UContainer>
</template>

<script lang="ts" setup>
interface Props {
  isLoading?: boolean;
  processing: number;
  colorPass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  processing: 0,
  colorPass: "var(--color-green-500)",
});

const { processing, isLoading } = toRefs(props);

const data = computed(() => [
  { category: "Pass", percentage: processing.value },
  { category: "Fail", percentage: 100 - processing.value },
]);

const categories = computed(() => {
  return {
    Pass: {
      name: "Pass",
      color: props.colorPass,
    },
    Fail: {
      name: "Fail",
      color: "var(--color-zinc-400)",
    },
  };
});
</script>

<style scoped></style>
