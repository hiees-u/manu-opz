<template>
  <UCard
    variant="soft"
    :ui="{
      root: 'bg-gradient-to-tr from-blue-600 to-violet-400 text-white',
      body: 'sm:p-4',
    }"
  >
    <div class="mb-3">
      <p class="text-xl font-medium">Overall Equipment Effectiveness (OEE)</p>
    </div>
    <p class="text-5xl font-bold mb-2">
      {{ oee }}%
      <UBadge
        variant="soft"
        :ui="{
          base: 'bg-[#3d0bd336] text-white',
        }"
      >
        {{ trendText }}
      </UBadge>
    </p>
    <p class="text-sm text-white-100">Target {{}}% (World Class)</p>
    <div class="flex justify-between p-0 mt-3">
      <!-- <UBadge color="success" variant="soft" :ui="{ base: 'block w-[32%] text-white' }"> -->
      <UBadge
        variant="soft"
        :ui="{
          base: 'bg-[#1010fa47] text-white block w-[32%]',
        }"
      >
        <p class="text-xs font-normal">Availability</p>
        <p class="text-2xl font-semibold">{{ avail }}%</p>
      </UBadge>
      <UBadge
        color="success"
        variant="soft"
        :ui="{
          base: 'bg-[#1010fa47] text-white block w-[32%]',
        }"
      >
        <p class="text-xs font-normal">Performance</p>
        <p class="text-2xl font-semibold">{{ perf }}%</p>
      </UBadge>
      <UBadge
        variant="soft"
        :ui="{
          base: 'bg-[#1010fa47] text-white block w-[32%]',
        }"
      >
        <p class="text-xs font-normal">Quality</p>
        <p class="text-2xl font-semibold">{{ qual }}%</p>
      </UBadge>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    // Define any props if needed
    oee: number;
    avail: number;
    perf: number;
    qual: number;
    trend: number
  }>(),
  {
    // Set default values for props if needed
    oee: 0,
    avail: 0,
    perf: 0,
    qual: 0,
    trend: 0
  },
);

const { oee, avail, perf, qual, trend } = toRefs(props);

const trendText = computed(() => {
  if (trend.value > 0) {
    return `+${trend.value}% vs last week`;
  } else if (trend.value < 0) {
    return `${trend.value}% vs last week`;
  } else {
    return 'No change vs last week';
  }
});
</script>

<style scoped></style>
