import * as cookies from "./cookies";

export const invokeApi = async ({ url }) => {
  const token = cookies.getToken();
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const retry = () => invokeApi({ url });
  const refreshTokenAndRetry = () => {
    return fetch("/api/refreshToken", { method: "POST" })
      .then((response) => response.json())
      .then((response) => {
        if (!response?.token) return response;
        cookies.setToken(response.token);
        return retry();
      });
  };

  return fetch(url, option)
    .then((response) => response.json())
    .then((response) => {
      if (!response.error) return response;
      console.warn(`${response?.error?.message}. Go refresh token once.`);
      return refreshTokenAndRetry(response);
    });
};
