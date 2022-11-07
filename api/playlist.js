const getPlaylist = async ({ token, categoryId }) => {
  const url = `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`;
  const option = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const response = await fetch(url, option);
  return await response.json();
};

export default getPlaylist;
