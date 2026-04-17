import type { BusinessPerformanceRequest, OeeRequest } from "~~/types/metrics/oee.request";
import type { BusinessPerformanceResponse, OeeResponse } from "~~/types/metrics/oee.response";

export const MetricsApi = {
  baseUrl: `/api/metrics`,
  getMetricsOee: async (request: OeeRequest): Promise<OeeResponse> => {
    const response: OeeResponse =
      (await $fetch(MetricsApi.baseUrl + "/oee", {
        method: "GET",
        query: {
          ...request,
        },
      })) || [];

    return response;
  },
  getMetricsBussinessPerformation: async (): Promise<BusinessPerformanceResponse> => {
    const response: BusinessPerformanceResponse = (await $fetch(MetricsApi.baseUrl + '/business.performaton', {
      method: 'GET',
    })) || [];

    return response;
  }
};
