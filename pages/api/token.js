import getSpotifyToken from "../../api/token";

export default async function handler(req, res) {
  const token = await getSpotifyToken(
    process.env.SPOTIFY_CLIENT_ID,
    process.env.SPOTIFY_CLIENT_SECRET,
  );
  res.status(200).json({ token });
}
