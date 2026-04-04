import { getOrderSummary } from "~~/server/services/order.service";

export default defineEventHandler(async (event) => {
  const payload = await readBody(event);
  console.log("/api/orders/summary : POST => SSR");
  console.log("PAYLOAD:", JSON.stringify(payload, null, 2));

  const result = await getOrderSummary(payload);

  return {
    data: result,
    success: true,
    message: "success!",
  };
});
