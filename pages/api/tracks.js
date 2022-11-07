import getTracks from "../../api/tracks";

export default async function handler(req, res) {
  const { token, playlistId } = req.query;
  const tracks = await getTracks({ token, playlistId });
  res.status(200).json({ tracks });
}
