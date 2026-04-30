import type { OeeModel } from "~~/types/metrics/oee.model";

export const useOeeSummary = (
  selectedDay: Ref<SelectorItem | null>,
  selectedCategories: Ref<SelectorItem[]>,
) => {
  const getOeeSummaryDate = async (date: string = "today") => {
    const oeeList = await getOeeDate({ date });
    const count = oeeList?.length || 1;
    const list = oeeList ?? [];

    const sum = list.reduce(
      (acc, cur: OeeModel) => ({
        availability: acc.availability + cur.oee.availability,
        performance: acc.performance + cur.oee.performance,
        quality: acc.quality + cur.oee.quality,
      }),
      { availability: 0, performance: 0, quality: 0 },
    );

    const avg = {
      availability: Number((sum.availability / count).toFixed(2)),
      performance: Number((sum.performance / count).toFixed(2)),
      quality: Number((sum.quality / count).toFixed(2)),
    };

    const rate = Number(
      ((avg.availability * avg.performance * avg.quality) / 10000).toFixed(2),
    );

    return {
      oeeSummary: avg,
      rate,
    };
  };
  const getOeeSummary = async () => {
    const current = await getOeeSummaryDate(selectedDay.value?.id);
    const { rate } = await getOeeSummaryDate(`${selectedDay.value?.id}-1`);

    return {
      oee: current.oeeSummary,
      rate: current.rate,
      oldRate: Number((-(rate - current.rate)).toFixed(2)),
    };
  };

  const { data: oeeSummmary, pending: pendingOeeSummary } = useAsyncData(
    "oee-summary",
    async () => await getOeeSummary(),
    {
      immediate: true,
      watch: [selectedDay, selectedCategories],
      default: () => ({
        oee: {
          availability: 0,
          performance: 0,
          quality: 0,
        },
        rate: 0,
        oldRate: 0,
      }),
    },
  );

  return {
    oeeSummmary,
    pendingOeeSummary,
  };
};
