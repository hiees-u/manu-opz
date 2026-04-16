import { MetricsApi } from "~/services/api/metrics.client";
import type { OeeModel } from "~~/types/metrics/oee.model";
import type { OeeRequest } from "~~/types/metrics/oee.request";

const getOeeDate = async (paylaoad: OeeRequest):Promise<OeeModel[] | null> => {
  const result = (await MetricsApi.getMetricsOee(paylaoad)).data;
  return result;
}

export { getOeeDate }