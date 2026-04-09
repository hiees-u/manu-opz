import selectDateValue from "~/utils/constants/selectDateValue";

export const useDateSelector = () => {
  const selectedDay = ref<SelectorItem | null>({
    id: "today",
    label: "Today",
  });

  return {
    selectedDay,
    selectDateValue
  };
}
