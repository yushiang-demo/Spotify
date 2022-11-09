import getSpotifyToken from "../../api/token";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const token = await getSpotifyToken(
        process.env.SPOTIFY_CLIENT_ID,
        process.env.SPOTIFY_CLIENT_SECRET,
      );
      res.status(200).json({ token });
    } catch {
      res.status(500).json({
        error: { message: "Server side cannot get token.", status: 401 },
      });
    }
  }
}
