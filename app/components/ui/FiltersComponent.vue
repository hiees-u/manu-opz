<template>
  <UBadge
    color="neutral"
    variant="outline"
    class="mb-5 py-2 px-5 w-full flex items-center justify-between"
  >
    <div>
      <UIcon :name="ICONS.filters" class="mr-1 size-4" />
      Filters:
      <USelect
      variant="subtle"
        arrow
        v-model="selecterDayValue"
        :items="selecterDay"
        class="ml-2"
      />
      <USelect
      variant="subtle"
        arrow
        placeholder="All Products"
        v-model="selecterProductsValue"
        :items="selecterProducts"
        multiple
        class="ml-2"
      />
    </div>
  </UBadge>
</template>

<script lang="ts" setup>
import { ICONS } from "~/utils/constants/icon";

const selecterDay = ref(["day", "week", "month", "year"]);
const selecterProducts = ref(["product2", "product3"]);

const selecterDayValue = ref("day");
const selecterProductsValue = ref([]);
</script>

<style></style>
