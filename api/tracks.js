import { invokeApi } from "../helper/apiHelper";

const getTracks = async ({ playlistId }) => {
  const param = {
    url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
  };
  return invokeApi(param);
};

export default getTracks;
