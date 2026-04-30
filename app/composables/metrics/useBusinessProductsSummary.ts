export const useBusinessProductsSummary = () => {
  const { data: businessPerformance, pending: pendingBusinessPerformance } = useAsyncData(
    "business-performance",
    async () => {
      const businessPerformances = (await getBusinessPerformation()) ?? [];
      const result = Object.values(
        businessPerformances.reduce(
          (acc, { date, revenue, cost, profit }) => {
            acc[date] ??= { date, revenue: 0, cost: 0, profit: 0 };

            acc[date].revenue += revenue;
            acc[date].cost += cost;
            acc[date].profit += profit;

            return acc;
          },
          {} as Record<
            string,
            { date: string; revenue: number; cost: number; profit: number }
          >,
        ),
      );
      return result;
    },
    {
      immediate: true,
      default: () => ([{
        revenue: 0,
        cost: 0,
        profit: 0,
        date: "",
      }]),
    },
  );

  return {
    businessPerformance,
    pendingBusinessPerformance,
  };
};
