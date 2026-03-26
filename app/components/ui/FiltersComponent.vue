<template>
  <UBadge
    color="neutral"
    variant="outline"
    class="mb-5 py-2 px-5 w-full max-w-xl"
  >
    <div class="max-w-full">
      <ClientOnly v-if="isMounted">
        <UTooltip :text="tooltipMessage" :delay-duration="15" :content="{ align: 'center', side: 'top'}" arrow>
          <USelectMenu
            variant="subtle"
            arrow
            placeholder="All Categories"
            v-model="modelValue"
            :items="selecterValue"
            multiple
            class="min-w-32 max-w-full"
            :highlight="false"
            :search-input="{ placeholder: 'Tìm kiếm sản phẩm...' }"
            clear
            @update:search-term="onSearch"
            loading-icon="i-lucide-loader"
            :loading="isLoading"
          />
        </UTooltip>
      </ClientOnly>
      <div v-else>
        <USkeleton class="ml-2 min-w-32 h-8"></USkeleton>
      </div>
    </div>
  </UBadge>
</template>

<script lang="ts" setup>
import type { SelectMenuItem } from "@nuxt/ui";

const isMounted = ref<boolean>(false);

const props = withDefaults(
  defineProps<{
    selecterValue: SelectMenuItem[];
    selectedValue: SelectorItem[];
    isLoading: boolean;
  }>(),
  {
    selecterValue: () => [],
    selectedValue: () => [],
    isLoading: false,
  },
);

const modelValue = computed({
  get: () => props.selectedValue,
  set: (val: string[]) => {
    emit("update:selectedValue", val);
    console.log("SELECTED");
  },
});

const tooltipMessage = computed(() => {
  return props.selectedValue.map(item => item.label || '').join(", ")
});

const emit = defineEmits<{
  (e: "searchTermChange", value: string): void;
  (e: "update:selectedValue", value: string[]): void;
}>();

const onSearch = useDebounceFn((val: string) => {
  console.log("Combobox Search:", val);
  emit("searchTermChange", val);
}, 500);

onMounted(() => {
  isMounted.value = true;
});
</script>

<style></style>
