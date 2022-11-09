import { invokeApi } from "../helper/apiHelper";

const getPlaylist = ({ categoryId }) => {
  const param = {
    url: `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,
  };
  return invokeApi(param);
};

export default getPlaylist;
