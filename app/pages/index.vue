<template>
  <UContainer>
    <!-- filters -->
    <UBadge color="neutral" variant="outline" :ui="{ base: 'w-full' }">
      <div class="flex items-center py-2 px-3 gap-3">
        <UIcon :name="ICONS.filters" class="size-7" />
        <p class="text-base">Filters:</p>
        <UiSelectorComponent
          :selecterValue="selectDateValue"
          :multi-select="false"
          :is-clearable="false"
          place-holder="Select Day"
          v-model:selected-value="selectedDay"
          class="max-w-50"
        />
        <UiSelectorComponent
          :placeHolder="'All Catrgories'"
          :selecterValue="selecterCategoriesValue"
          :multi-select="true"
          v-model:selected-value="selectedCategories"
          @search-term-change="onChangeFilterCategorySelector"
          @update:open="
            (val) => {
              isOpenCategorySelector = val;
            }
          "
          @update:cursor="(val) => (cursorCategoryNext = val)"
          class="max-w-50"
        />
      </div>
    </UBadge>

    <div class="grid grid-cols-5 mt-4 gap-4">
      <div class="col-span-1 row-span-1">
        <UiBaseStatCard
          title="Total's Orders"
          :value="orderTotalSummary.currentOrderTotal"
          unit="units"
          :trend="orderTotalSummary.orderTotalChangeRate"
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
          :value="`$${OrderRevenue.current}`"
          unit="K"
          :trend="OrderRevenue.rate"
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
          :value="92.2"
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
          :value="productOutput.current"
          unit="units"
          :trend="productOutput.rate"
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
          :value="delayOrder.current"
          unit="orders"
          :trend="delayOrder.rate"
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
          :value="5.5"
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
      <div class="col-span-2 row-span-2">
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
        <UiPassRateGaugeComponent
          :is-loading="!mounted"
          :processing="passRate"
          :colorPass="colorPass"
        />
      </div>
      <div class="col-span-2 row-span-2">
        <UiOrderPipelineStatusCardComponent
          :is-loading="!mounted"
          :orderSummaryStatus="orderSummaryStatus"
        />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import { ICONS } from "@/utils/constants/icon";

definePageMeta({
  middleware: "auth",
  layout: "default",
  ssr: true,
});

const mounted = ref(false);

const {
  onSearch: onChangeFilterCategorySelector,
  isOpen: isOpenCategorySelector,
  options: selecterCategoriesValue,
  cursorNext: cursorCategoryNext,
  selectedCategories,
} = useCategoriesSelector();

const { selectedDay, selectDateValue } = useDateSelector();

const { orderSummaryStatus, orderTotalSummary, OrderRevenue, delayOrder } = await useOrderSummary( selectedDay, selectedCategories);

const { data: passRate, colorPass } = await usePassRate(selectedDay, selectedCategories);

const { productOutput } = await useProductOutput(selectedDay, selectedCategories)

onMounted(async () => {
  mounted.value = true;
});
</script>

<style scoped></style>

<!-- https://grok.com/share/c2hhcmQtNA_b00998ec-ca4d-49e3-87f6-78f32941e9d4 -->
