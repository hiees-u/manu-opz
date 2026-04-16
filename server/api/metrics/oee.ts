import { getOee } from "~~/server/services/metrics.oee.service";
import { OeeRequest } from "~~/types/metrics/oee.request";

export default defineEventHandler(async (event) => {
  const query: OeeRequest = getQuery(event);
  const res = getOee(query);
  return res;
});
