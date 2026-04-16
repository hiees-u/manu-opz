import type { OeeModel } from "../../types/metrics/oee.model";
import type { OeeRequest } from "../../types/metrics/oee.request";

const OEE: OeeModel[] = [
  { date: "today", oee: { availability: 78, performance: 82, quality: 91 } },
  { date: "today", oee: { availability: 80, performance: 79, quality: 88 } },
  { date: "today", oee: { availability: 76, performance: 85, quality: 90 } },
  { date: "today-1", oee: { availability: 82, performance: 81, quality: 92 } },

  { date: "week", oee: { availability: 74, performance: 77, quality: 89 } },
  { date: "week", oee: { availability: 85, performance: 88, quality: 94 } },
  { date: "week", oee: { availability: 88, performance: 90, quality: 95 } },
  { date: "week-1", oee: { availability: 70, performance: 75, quality: 87 } },

  { date: "year", oee: { availability: 79, performance: 83, quality: 91 } },
  { date: "year", oee: { availability: 81, performance: 86, quality: 93 } },
  { date: "year", oee: { availability: 77, performance: 80, quality: 90 } },
  { date: "year-1", oee: { availability: 83, performance: 87, quality: 94 } },

  { date: "month", oee: { availability: 69, performance: 74, quality: 88 } },
  { date: "month", oee: { availability: 75, performance: 80, quality: 90 } },
  { date: "month", oee: { availability: 84, performance: 89, quality: 93 } },
  { date: "month-1", oee: { availability: 72, performance: 78, quality: 89 } },

  { date: "today-1", oee: { availability: 90, performance: 92, quality: 96 } },
  { date: "week-1", oee: { availability: 73, performance: 76, quality: 88 } },
  { date: "year-1", oee: { availability: 86, performance: 90, quality: 94 } },
  { date: "month-1", oee: { availability: 80, performance: 84, quality: 91 } },
];

const getOee = (request: OeeRequest) => {
  const { date } = request;

  const res = date ? OEE.filter((item) => item.date === date) : OEE;

  return res;
};

export { getOee };
