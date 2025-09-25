import * as dotenv from "dotenv";
dotenv.config();

import type {
  APIResponse,
  CreateAccountRequest,
  CreateAccountResponse,
  GetAccountRequest,
  GetAccountResponse,
} from "./types";

const BASE_URL = process.env.API_BASE_URL || "";

export async function createAccount(params: CreateAccountRequest) {
  const res: APIResponse<CreateAccountResponse> = await fetch(
    `${BASE_URL}/accounts`,
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

export async function getAccountBalance(params: GetAccountRequest) {
  const res: APIResponse<GetAccountResponse> = await fetch(
    `${BASE_URL}/accounts/${params.account_id}/balance`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
