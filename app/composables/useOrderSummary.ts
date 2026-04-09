import { getOrderSummary } from "./useOrders";

export const useOrderSummary = (
  selectedDay: Ref<SelectorItem | null>,
  selectedCategories: Ref<SelectorItem[]>,
) => {
  const { data } = useAsyncData(
    "order-summary",
    () =>
      getOrderSummary({
        date: selectedDay.value?.id || "today",
        cate: "all",
      }),
    {
      immediate: true,
      watch: [selectedDay, selectedCategories],
      default: () => [],
    },
  );

  return {
    data,
  };
};
