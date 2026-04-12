import { getProductOutput } from "~~/server/services/product.service";

export default defineEventHandler(async (event) => {
  const payload = getQuery(event);
  const results = await getProductOutput(payload);
  return {
    data: results,
    success: true,
    message: "success!",
  };
})
