import { getCategoriesService } from "~~/server/services/product.service";

export default defineEventHandler(async (event) => {
  const formData = (await readBody(event)) || [];

  console.log("/api/products/category : Get => SSR");
  console.log("PAYLOAD:", JSON.stringify(formData, null, 2));

  const response = await getCategoriesService(formData);
  console.log("RESPONSE:", JSON.stringify(response, null, 2));

  return {
    data: response,
    success: true,
    message: "success!",
  };
});
