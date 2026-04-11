import { getOrders } from "~~/server/services/order.service";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  console.log("Query:", query);

  const result = getOrders(query);

  return {
    data: result,
    success: true,
    message: "success!",
  };
});
