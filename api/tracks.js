const getTracks = async ({ token, playlistId }) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  const option = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const response = await fetch(url, option);
  return await response.json();
};

export default getTracks;
