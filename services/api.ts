import deepmerge from "deepmerge";

export const DEFAULT_BASE_URL = "http://localhost:3000";

async function client(
  url: string,
  { body, headers = {}, method, ...others }: RequestInit = {}
) {
  const customHeaders: any = {};

  if (body && typeof body === "object" && !(body instanceof FormData)) {
    body = JSON.stringify(body);
    customHeaders["Content-Type"] = "application/json";
    customHeaders["Accept"] = "application/json";
  }

  return fetch(url, {
    method,
    body,
    headers: deepmerge(customHeaders, headers as Headers),
    ...others,
  }).then(async (response) => {
    const data = await response.json();
    if (data.error) {
      throw data;
    }

    return data;
  });
}

export const apiClient = () => {
  const baseUrl = process.env.BASE_URL || DEFAULT_BASE_URL;

  return {
    //TODO: add POST, PATCH methods here if needed
    get: (endpoint: string, options?: RequestInit) => {
      return client(`${baseUrl}${endpoint}`, { method: "GET", ...options });
    },
  };
};
