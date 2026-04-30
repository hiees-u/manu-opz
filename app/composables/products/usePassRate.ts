export const usePassRate = (
  selectedDay: Ref<SelectorItem | null>,
  selectedCategories: Ref<SelectorItem[]>,
) => {
  const { data: passRate, pending: pendingPassRate } = useAsyncData(
    "pass-rate",
    () =>
      getPassRate({
        date: selectedDay.value?.id || "today",
        cate: "all",
      }),
    {
      immediate: true,
      watch: [selectedDay, selectedCategories],
      default: () => ({ data: { total: 0, pass: 0, passRate: 0 } }),
    },
  );

  const data = computed(() => passRate.value?.data?.passRate || 0);

  const colorPass = computed(() => {
    const rate = data.value;
    if (rate >= 90) return "var(--color-green-500)";
    if (rate >= 70) return "var(--color-yellow-500)";
    return "var(--color-red-500)";
  });

  return {
    data,
    colorPass,
    pendingPassRate
  };
};
