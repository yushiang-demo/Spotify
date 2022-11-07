const getCategories = async (token) => {
  const url = "https://api.spotify.com/v1/browse/categories";
  const option = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const response = await fetch(url, option);
  return await response.json();
};

export default getCategories;
