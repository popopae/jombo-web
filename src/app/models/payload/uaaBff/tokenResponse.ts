import { ApiResponse } from "app/models/apiResponse";

export interface TokenResponse extends ApiResponse {
    access_token: string;
    refresh_token: string;
    auth_code: string;
    expires_in: string;
}