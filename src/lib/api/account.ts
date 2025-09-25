import type {
  APIResponse,
  CreateAccountRequest,
  CreateAccountResponse,
  GetAccountRequest,
  GetAccountResponse,
} from "./types";

export async function createAccount(params: CreateAccountRequest) {
  const res: APIResponse<CreateAccountResponse> = await fetch(`/api/accounts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then((res) => {
    if (!res.ok) {
      return {
        error: `Error: ${res.status} ${res.statusText}`,
        status: res.status,
        data: null,
      };
    }
    return res.json();
  });
  return res;
}

export async function getAccountBalance(params: GetAccountRequest) {
  const res: APIResponse<GetAccountResponse> = await fetch(
    `/api/accounts/${params.account_id}/balance`,
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
  return res;
}
