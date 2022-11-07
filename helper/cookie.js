import Cookies from "js-cookie";

const KEY_TOKEN = "KEY_TOKEN";
export const setToken = (token) => {
  Cookies.set(KEY_TOKEN, token);
};
export const getToken = () => {
  return Cookies.get(KEY_TOKEN);
};
