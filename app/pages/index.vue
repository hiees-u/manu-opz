<template>
  <UContainer>
    <!-- filters -->
    <UBadge color="neutral" variant="outline" :ui="{ base: 'w-full' }">
      <div class="flex items-center py-2 px-3 gap-3">
        <UIcon :name="ICONS.filters" class="size-7" />
        <p class="text-base">Filters:</p>
        <UiSelectorComponent
          :selecterValue="selecterDayValue"
          :multi-select="false"
          place-holder="Select Day"
          v-model:selected-value="selectedDay"
          @search-term-change="onChangeFilterCategorySelector"
          class="max-w-50"
        />
        <UiSelectorComponent
          :selecterValue="selecterCategoriesValue"
          :isLoading="isfetchSelectCategories"
          :multi-select="true"
          v-model:selected-value="selectedCategories"
          @search-term-change="onChangeFilterCategorySelector"
          @update:open="
            (val) => {
              isOpenCategorySelector = val;
            }
          "
          @update:cursor="
            (val) => {
              cursorCategoryNext = val;
              console.log('đã nhận cursor mới: ', val);
            }
          "
          class="max-w-50"

        />
      </div>
    </UBadge>

    <!--  -->
    <div class="grid grid-cols-5 mt-5 gap-4">
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
              <UIcon :name="ICONS.orders" class="w-5 h-5 text-green-600" />
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
                :name="ICONS.ordersAnalytics"
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
              <UIcon :name="ICONS.watchTime" class="w-5 h-5 text-green-600" />
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
                :name="ICONS.ordersAnalytics"
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
              <UIcon :name="ICONS.truckDelivery" class="w-5 h-5 text-red-500" />
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
              <UIcon :name="ICONS.defectRate" class="w-5 h-5 text-yellow-600" />
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
          :is-loading="!mounted"
        />
      </div>
      <div class="col-span-1 row-span-2">
        <UiPassRateGaugeComponent :is-loading="!mounted" :processing="94.5" />
      </div>
      <div class="col-span-2 row-span-2">
        <UiOrderPipelineStatusCardComponent
          :is-loading="!mounted"
          :revenue="revenue"
        />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import { ICONS } from "@/utils/constants/icon";

import type { SelectMenuItem } from "@nuxt/ui";
import type { Category } from "~~/types/category/category.model";
import type { CategoryRequest } from "~~/types/category/category.request";

definePageMeta({
  middleware: "auth",
  layout: "default",
  ssr: true,
});

const mounted = ref(false);
const search = ref("");

const isOpenCategorySelector = ref(false);
const cursorCategoryNext = ref<string | null>(null);
const selectedCategories = ref<SelectorItem[]>([]);
const selectedCategoriesLimit = 10;
const allCategories = ref<Category[]>([]);

const {
  data: categories,
  pending,
  refresh,
} = await useAsyncData(
  "categories",
  () =>
    getCategories({
      page: 1,
      cursor: cursorCategoryNext.value,
      pageSize: selectedCategoriesLimit,
      filters: {
        ...(search.value ? { obj_name: search.value } : {}),
      },
    } as CategoryRequest),
  {
    immediate: false,
    watch: [search, cursorCategoryNext],
    default: () => [],
  },
);

const selecterCategoriesValue = computed<SelectMenuItem[]>(() =>
  (allCategories.value ?? []).map((cate) => ({
    label: cate.obj_name,
    id: cate.obj_id,
  })),
);

watch(
  categories,
  (newCategories) => {
    // search mới -> reset data cũ
    if (!cursorCategoryNext.value || search.value) {
      allCategories.value = newCategories ?? [];
      return;
    }

    // load more -> chỉ append nếu API có data
    if (newCategories && newCategories.length > 0) {
      allCategories.value.push(...newCategories);
    }
  },
  { immediate: true },
);

watch(isOpenCategorySelector, () => {
  if (isOpenCategorySelector.value) {
    if(allCategories.value.length === 0) {
      refresh();
    }
  }
});

const isfetchSelectCategories = computed(() => pending.value);

const onChangeFilterCategorySelector = (value: string) => {
  search.value = value;
};

const selectedDay = ref<SelectorItem | null>({
  id: 'today',
  label: 'today'
});

const selecterDayValue = [
  {
    id: "id",
    label: "today",
  },
  {
    id: "week",
    label: "week",
  },
  {
    id: "month",
    label: "month",
  }, {
    id: "year",
    label: "year",
  }
];

const { data: revenue } = await useAsyncData(
  'order-summary', 
  () => 
  getOrderSummary({
    date: selectedDay.value?.id || 'today',
    product: 'all',
  }),
  {
    immediate: true,
    watch: [selectedDay, selectedCategories],
    default: () => ([{ status: '', value: 0 }]),
  }
)

onMounted(async () => {
  mounted.value = true;
});
</script>

<style scoped></style>

<!-- https://grok.com/share/c2hhcmQtNA_b00998ec-ca4d-49e3-87f6-78f32941e9d4 -->
