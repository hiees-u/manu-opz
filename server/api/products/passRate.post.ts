import { getPassRateService } from "~~/server/services/product.service";

export default defineEventHandler(async (event) => {
  const formData = (await readBody(event)) || [];

  console.log("/api/products/passRate : Get => SSR");
  console.log("PAYLOAD:", JSON.stringify(formData, null, 2));

  const results = await getPassRateService(formData);
  console.log("RESPONSE:", JSON.stringify(results, null, 2));

  return {
    data: results,
    success: true,
    message: "success!",
  };
});
