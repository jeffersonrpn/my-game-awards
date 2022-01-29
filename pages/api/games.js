import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("games")
    .find({})
    .sort({ name: 1 })
    .toArray();

  res.json(movies);
};
