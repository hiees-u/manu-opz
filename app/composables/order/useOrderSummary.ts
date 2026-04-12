import { getOrderSummary } from "./useOrders";

export const useOrderSummary = (
  selectedDay: Ref<SelectorItem | null>,
  selectedCategories: Ref<SelectorItem[]>,
) => {
  const { data: orderSummaryStatus } = useAsyncData(
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

  const {
    data: orderTotalSummary = { currentOrderTotal: 0, orderTotalChangeRate: 0 },
  } = useAsyncData(
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

  const orderRevenueDate = async (date?: string) => {
    const orders = await getOrders({
      status: "completed",
      date: date ?? selectedDay.value?.id ?? "today",
    });

    const revenue = orders.reduce((sum, n) => sum + n.amount, 0);

    return revenue;
  };

  const { data: OrderRevenue } = useAsyncData(
    "order-revenue",
    async () => {
      const currenRevenue = await orderRevenueDate();
      const oldRevenue = await orderRevenueDate(`${selectedDay.value?.id}-1`);

      const rate = oldRevenue
        ? Number((((currenRevenue - oldRevenue) / oldRevenue) * 100).toFixed(2))
        : 0;

      return {
        current: currenRevenue,
        rate,
      };
    },
    {
      immediate: true,
      watch: [selectedDay, selectedCategories],
      default: () => ({ current: 0, rate: 0 }),
    },
  );

  const orderDelayDate = async (date?: string) => {
    const orderDelay = await getOrders({
      status: 'delayed',
      date: date ?? selectedDay.value?.id ?? 'today'
    })

    return orderDelay.length;
  }

  const { data: delayOrder } = useAsyncData(
    'delay-order',
    async () => {
      const currentValue = await orderDelayDate();
      const oldValue = await orderDelayDate(`${selectedDay.value?.id}-1`);

      const rate = oldValue
       ? Number((((currentValue - oldValue) / oldValue) *  100).toFixed(2)) 
       : 0;

      return {
        current: currentValue,
        rate
      }
    },
    {
      immediate: true,
      watch: [selectedDay, selectedCategories],
      default: () => ({current: 0, rate: 0})
    }
  );

  return {
    orderSummaryStatus,
    orderTotalSummary,
    OrderRevenue,
    delayOrder,
  };
};
