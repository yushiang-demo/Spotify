import getPlaylist from "../../api/playlist";

export default async function handler(req, res) {
  const { token, categoryId } = req.query;
  const playlist = await getPlaylist({ token, categoryId });
  res.status(200).json({ playlist });
}
