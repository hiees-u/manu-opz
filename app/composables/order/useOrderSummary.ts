import { getOrderSummary } from "./useOrders";

export const useOrderSummary = (
  selectedDay: Ref<SelectorItem | null>,
  selectedCategories: Ref<SelectorItem[]>,
) => {
  const { data: revenue } = useAsyncData(
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

  const { data: orderTotalSummary = { currentOrderTotal: 0, orderTotalChangeRate: 0 } } =
    useAsyncData(
      "order-total",
      async () => {
        const currentOrderTotal =
          (await getOrderTotal({
            date: selectedDay.value?.id || "today",
            cate: "all",
          })) || 0;

        // const oldOrderTotal = await getOrderTotal({
        //   date: "week",
        //   cate: "all",
        // }) || 0;

        const oldOrderTotal = 500; // giả sử giá trị cũ để tính toán

        const orderTotalChangeRate = oldOrderTotal
          ? ((currentOrderTotal - oldOrderTotal) / oldOrderTotal) * 100
          : 0;

        return { currentOrderTotal, orderTotalChangeRate };
      },
      {
        immediate: true,
        watch: [selectedDay, selectedCategories],
        default: () => ({ currentOrderTotal: 0, orderTotalChangeRate: 0 }),
      },
    );

  return {
    revenue,
    orderTotalSummary
  };
};
