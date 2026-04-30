import type { ProductOutPutRequest } from "~~/types/products/products.request";

export const useDefectRate = (
  selectedDay: Ref<SelectorItem | null>,
  selectedCategories: Ref<SelectorItem[]>,
) => {
  const totalProductDefect = async (payload: ProductOutPutRequest) => {
    const productOutput = (await getProductsOutput(payload)).data;

    return productOutput?.reduce(
      (sumDefect, n) => sumDefect + n.quantityDefect,
      0,
    );
  };

  const { data: productDefect, pending: pendingDefect } = useAsyncData(
    "products-defect",
    async () => {
      const currentDefectRate =
        (await totalProductDefect({ date: selectedDay.value?.id })) || 0;
      const oldDefectRate = await totalProductDefect({
        date: `${selectedDay.value?.id}-1`,
      });

      const rate = oldDefectRate
        ? Number(
            (
              ((currentDefectRate - oldDefectRate) / oldDefectRate) *
              100
            ).toFixed(2),
          )
        : 0;

      return {
        current: currentDefectRate,
        rate,
      };
    },
    {
      immediate: true,
      watch: [selectedDay, selectedCategories],
      default: () => ({ current: 1, rate: 1 }),
    },
  );

  return { productDefect, pendingDefect };
};
