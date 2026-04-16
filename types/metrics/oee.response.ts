import type { OeeModel } from "./oee.model";
import type { ApiResponse } from "../api.response";

export type OeeResponse = ApiResponse<OeeModel[] | null>;
