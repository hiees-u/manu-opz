<template>
  <template v-if="!isLoading">
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
  <template v-else>
    <UCard class="h-auto w-full rounded-lg"  :ui="{ body: 'p-0 sm:p-4 relative' }">
      <USkeleton class="h-7 w-full rounded-lg mb-3" />
      <div class="flex items-end w-50 mb-4">
        <USkeleton class="h-13 w-25 rounded-lg" />
        <USkeleton class="h-5 w-30 rounded-lg ml-3" />
      </div>
      <USkeleton class="h-3 w-40 rounded-lg mb-3" />
      <div class="flex w-full gap-5">
        <UCard class="w-full" :ui="{ body: 'p-0 sm:p-3 relative' }">
          <USkeleton class="h-2 w-full rounded-lg mb-2" />
          <USkeleton class="h-5 w-15 rounded-lg" />
        </UCard>
        <UCard class="w-full" :ui="{ body: 'p-0 sm:p-3 relative' }">
          <USkeleton class="h-2 w-full rounded-lg mb-2" />
          <USkeleton class="h-5 w-15 rounded-lg" />
        </UCard>
        <UCard class="w-full" :ui="{ body: 'p-0 sm:p-3 relative' }">
          <USkeleton class="h-2 w-full rounded-lg mb-2" />
          <USkeleton class="h-5 w-15 rounded-lg" />
        </UCard>
      </div>
    </UCard>
  </template>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    oee: number;
    avail: number;
    perf: number;
    qual: number;
    trend: number;
    isLoading?: boolean;
  }>(),
  {
    oee: 0,
    avail: 0,
    perf: 0,
    qual: 0,
    trend: 0,
    isLoading: false,
  },
);

const { oee, avail, perf, qual, trend, isLoading } = toRefs(props);

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
