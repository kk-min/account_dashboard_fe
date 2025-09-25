export interface APIResponse<T> {
  data: T;
  error?: string;
  status: number;
}

// Create Account API (POST)
export interface CreateAccountRequest {
  account_id: number;
  initial_balance: string;
}

export interface CreateAccountResponse {
  account_id: number;
  balance: string;
}

// Get Account Balance API (GET)
export interface GetAccountRequest {
  account_id: number;
}

export interface GetAccountResponse {
  account_id: number;
  balance: string;
}
