import { invokeApi } from "../helper/apiHelper";

const getFeaturedPlaylists = () => {
  const param = {
    url: "https://api.spotify.com/v1/browse/featured-playlists",
  };
  return invokeApi(param);
};

export default getFeaturedPlaylists;
