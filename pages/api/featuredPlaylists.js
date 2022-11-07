import getFeaturedPlaylists from "../../api/featuredPlaylists";

export default async function handler(req, res) {
  const { token } = req.query;
  const playlists = await getFeaturedPlaylists(token);
  res.status(200).json({ playlists });
}
