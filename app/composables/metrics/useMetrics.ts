import { MetricsApi } from "~/services/api/metrics.client";
import type { BusinessPerformationModel, OeeModel } from "~~/types/metrics/oee.model";
import type { OeeRequest } from "~~/types/metrics/oee.request";

const getOeeDate = async (paylaoad: OeeRequest):Promise<OeeModel[] | null> => {
  const result = (await MetricsApi.getMetricsOee(paylaoad)).data;
  return result;
}

const getBusinessPerformation = async (): Promise<BusinessPerformationModel[] | null> => {
  const result = (await MetricsApi.getMetricsBussinessPerformation()).data;

  return result;
}

export { getOeeDate, getBusinessPerformation }