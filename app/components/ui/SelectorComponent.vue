<template>
  <div class="max-w-full mx-0.3">
    <ClientOnly v-if="isMounted">
      <UTooltip
        :text="tooltipMessage"
        :delay-duration="15"
        :content="{ align: 'center', side: 'top' }"
        arrow
      >
        <USelectMenu
          ref="selectMenu"
          arrow
          variant="subtle"
          :placeholder="props.placeHolder"
          v-model="modelValue"
          :items="selecterValue"
          :multiple="multiSelect"
          class="min-w-32 max-w-full"
          :highlight="false"
          :search-input="{ placeholder: seachInputPlacHolder }"
          :clear="isClearable"
          @update:search-term="onSearch"
          loading-icon="i-lucide-loader"
          :loading="isLoading"
          @update:open="(val) => emit('update:open', val)"
        />
      </UTooltip>
    </ClientOnly>
    <div v-else>
      <USkeleton class="ml-2 min-w-32 h-8"></USkeleton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SelectMenuItem } from "@nuxt/ui";

const isMounted = ref<boolean>(false);
const selectMenu = ref();
const lastEmittedCursor = ref<string | null>(null)

const props = withDefaults(
  defineProps<{
    selecterValue: SelectMenuItem[];
    selectedValue: SelectorItem | SelectorItem[] | null;
    isLoading?: boolean;
    multiSelect: boolean;
    placeHolder?: string;
    seachInputPlacHolder?: string;
    isOpenProp?: boolean;
    isClearable?: boolean;
  }>(),
  {
    selecterValue: () => [],
    selectedValue: () => [],
    isLoading: false,
    multiSelect: true,
    placeHolder: "All Products...",
    seachInputPlacHolder: 'Search Categories..',
    isOpenProp: false,
    isClearable: true,
  },
);

const modelValue = computed({
  get: () => props.selectedValue,
  set: (val: string[] | null) => {
    emit("update:selectedValue", val ?? null);
    console.log("SELECTED");
  },
});

const tooltipMessage = computed(() => {
  const value = Array.isArray(props.selectedValue)
    ? props.selectedValue
    : [props.selectedValue];
  return value.map((item) => item?.label || "").join(", ");
});

const emit = defineEmits<{
  (e: "searchTermChange", value: string): void;
  (e: "update:selectedValue", value: string[] | null): void;
  (e: "update:open", value: boolean): void;
  (e: "update:cursor", value: string | null): void;
}>();

const onSearch = useDebounceFn((val: string) => {
  console.log("Combobox Search:", val);
  emit("searchTermChange", val);
}, 500);

const loadMore = () => {
  if (props.isLoading || props.selecterValue.length === 0) {
    return
  }

  const lastItem = props.selecterValue.at(-1)

  if (
    typeof lastItem === "object" &&
    lastItem !== null &&
    "id" in lastItem &&
    lastItem.id !== lastEmittedCursor.value
  ) {
    lastEmittedCursor.value = lastItem.id
    emit("update:cursor", lastItem.id)
  }
}

onMounted(() => {
  isMounted.value = true;
  useInfiniteScroll(() => selectMenu.value?.viewportRef, loadMore, {
    distance: 50,
  });
});
</script>

<style></style>
