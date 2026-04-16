import type { OeeModel } from "~~/types/metrics/oee.model";
import type { OeeRequest } from "~~/types/metrics/oee.request";
import type { OeeResponse } from "~~/types/metrics/oee.response";

export const MetricsApi = {
  baseUrl: `/api/metrics`,
  getMetricsOee: async (request: OeeRequest): Promise<OeeResponse> => {
    const response: OeeModel[] =
      (await $fetch(MetricsApi.baseUrl + "/oee", {
        method: "GET",
        query: {
          ...request,
        },
      })) || [];

    return {
      data: response,
      success: true,
      message: "Success!!",
    };
  },
};
