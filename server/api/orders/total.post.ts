import { getOrderTotal } from "~~/server/services/order.service";

export default defineEventHandler(async (event) => {
  const formData = (await readBody(event)) || [];
  console.log("/api/orders/total : POST => SSR");
  console.log("PAYLOAD:", JSON.stringify(formData, null, 2));
  const result = await getOrderTotal(formData);

  return {
    data: result,
    success: true,
    message: "success!",
  };
})
