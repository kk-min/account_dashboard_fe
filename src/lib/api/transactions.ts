import * as dotenv from "dotenv";
dotenv.config();

import type {
  APIResponse,
  ExecuteTransferRequest,
  ExecuteTransferResponse,
} from "./types";

const BASE_URL = process.env.API_BASE_URL || "";

export async function executeTransaction(params: ExecuteTransferRequest) {
  const res: APIResponse<ExecuteTransferResponse> = await fetch(
    `${BASE_URL}/transactions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    },
  ).then((res) => {
    if (!res.ok) {
      return {
        error: `Error: ${res.status} ${res.statusText}`,
        status: res.status,
        data: null,
      };
    }
    return res.json();
  });
  return {
    data: res,
    error: res.error,
    status: res.status,
  };
}
