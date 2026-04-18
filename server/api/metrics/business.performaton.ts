import { getBusinessPerformation } from "~~/server/services/metrics.business.performation.service";
import { BusinessPerformanceRequest } from "~~/types/metrics/oee.request";

export default defineEventHandler(async (event) => {
  const query: BusinessPerformanceRequest = getQuery(event);

  const response = getBusinessPerformation(query);

  return {
    data: response,
    success: true,
    message: 'success!!',
  }
})
