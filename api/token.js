const request = require("request");

export const genHeader = (token) => {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

const getSpotifyToken = (client_id, client_secret) => {
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };

  return new Promise((reoslve, reject) => {
    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        reoslve(body.access_token);
      }
      reject(error);
    });
  });
};

export default getSpotifyToken;
