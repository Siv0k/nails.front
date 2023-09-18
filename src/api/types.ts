export type RestType = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

export interface ErrorResponse {
  statusCode: number;
  message: string;
}