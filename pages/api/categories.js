import getCategories from "../../api/categories";

export default async function handler(req, res) {
  const { token } = req.query;
  const categories = await getCategories(token);
  res.status(200).json({ categories });
}
