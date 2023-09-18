import { ErrorResponse, RestType } from "api/types";

export const APPLICATION_JSON = "application/json" as const;

export const isErrorResponse = <T>(
  response: ErrorResponse | T
): response is ErrorResponse =>
  typeof response === 'object' && "statusCode" in response && response?.statusCode >= 400;

const addBaseUrl = (url: string) => {
  const baseUrl = 'http://localhost:3000/api'

  if (!baseUrl) {
    return url;
  }

  const slash = baseUrl.match(/\/$/) ? "" : "/";

  return `${baseUrl}${slash}${url}`;
};

const checkRequest = (response: Response) => {
  const { status } = response;

  if (status >= 200 && status < 300) {
    return response;
  }

  return Promise.reject(response);
};

const parseResponse = (response: Response) => response.json();

const handleError = (error?: Response): Promise<ErrorResponse> => {
  if (error instanceof Response) {
    return error.json().then((err: ErrorResponse) => {
      if ("message" in err) {
        return err;
      }

      return {
        statusCode: error.status,
        message: "Ошибка сервера",
        error: "server.error",
      };
    });
  }

  return Promise.resolve({
    statusCode: 500,
    message: "Ошибка сервера",
    error: "server.error",
  });
};

const request = <T>(
  url: string,
  options: RequestInit
): Promise<T | ErrorResponse> =>
  fetch(addBaseUrl(url), options)
    .then(checkRequest)
    .then(parseResponse)
    .catch(handleError);

export const createRequest = <T>(
  url: string,
  method: RestType,
  body?: { [key: string]: any } | string,
  headers?: RequestInit["headers"]
) => {
  const options: RequestInit = {
    method,
    headers: {
      Accept: APPLICATION_JSON,
      'Content-type': APPLICATION_JSON,
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return request<T>(url, options);
};