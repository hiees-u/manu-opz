import type { ProductOutPutRequest } from "~~/types/products/products.request";

export const useProductOutput = (
  selectedDay: Ref<SelectorItem | null>,
  selectedCategories: Ref<SelectorItem[]>,
) => {
  const totalProductOutput = async (payload: ProductOutPutRequest) => {
    const productOutput = (await getProductsOutput(payload)).data;

    return productOutput?.reduce((sum, n) => sum + n.quantity, 0);
  };

  const { data: productOutput } = useAsyncData(
    "product-output",
    async () => {
      const current =
        (await totalProductOutput({ date: selectedDay.value?.id })) || 0;
      const oldVal = await totalProductOutput({
        date: `${selectedDay.value?.id}-1`,
      });

      const rate = oldVal
        ? Number((((current - oldVal) / oldVal) * 100).toFixed(2))
        : 0;
      return {
        current,
        rate,
      };
    },
    {
      immediate: true,
      watch: [selectedDay, selectedCategories],
      default: () => ({ current: 1, rate: 1 }),
    },
  );

  return { productOutput };
};
