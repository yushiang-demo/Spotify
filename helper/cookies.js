import Cookies from "js-cookie";

const KEY_ACCESS_TOKEN = "KEY_ACCESS_TOKEN";
export const setToken = (token) => {
  Cookies.set(KEY_ACCESS_TOKEN, token);
};
export const getToken = () => {
  return Cookies.get(KEY_ACCESS_TOKEN);
};
