import type { SelectMenuItem } from "@nuxt/ui";
import type { Category } from "~~/types/category/category.model";
import type { CategoryRequest } from "~~/types/category/category.request";

export const useCategoriesSelector = () => {
  const search = ref("");

  const isOpen = ref(false);
  const cursorNext = ref<string | null>(null);
  const selectedCategories = ref<SelectorItem[]>([]);
  const selectedCategoriesLimit = 10;
  const allCategories = ref<Category[]>([]);

  const {
    data: categories,
    pending,
    refresh,
  } = useAsyncData(
    "categories",
    () =>
      getCategories({
        page: 1,
        cursor: cursorNext.value,
        pageSize: selectedCategoriesLimit,
        filters: {
          ...(search.value ? { obj_name: search.value } : {}),
        },
      } as CategoryRequest),
    {
      immediate: false,
      watch: [search, cursorNext],
      default: () => [],
    },
  );

  const options = computed<SelectMenuItem[]>(() =>
    (allCategories.value ?? []).map((cate) => ({
      label: cate.obj_name,
      id: cate.obj_id,
    })),
  );

  watch(
    categories,
    (newCategories) => {
      // search mới -> reset data cũ
      if (!cursorNext.value || search.value) {
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

  watch(isOpen, () => {
    if (isOpen.value) {
      if (allCategories.value.length === 0) {
        refresh();
      }
    }
  });

  // const isfetchSelectCategories = computed(() => pending.value);

  const onSearch = (value: string) => {
    search.value = value;
  };


  return {
    onSearch,
    isOpen,
    options,
    cursorNext,
    selectedCategories
  }
};
