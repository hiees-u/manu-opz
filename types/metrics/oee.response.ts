import type { BusinessPerformationModel, OeeModel } from "./oee.model";
import type { ApiResponse } from "../api.response";

 type OeeResponse = ApiResponse<OeeModel[] | null>;
 type BusinessPerformanceResponse = ApiResponse<BusinessPerformationModel[]>;

 export type {
  OeeResponse,
  BusinessPerformanceResponse
 }