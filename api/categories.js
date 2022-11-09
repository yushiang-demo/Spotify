import { invokeApi } from "../helper/apiHelper";

const getCategories = () => {
  const param = {
    url: "https://api.spotify.com/v1/browse/categories",
  };
  return invokeApi(param);
};

export default getCategories;
