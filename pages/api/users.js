import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const user = req.body.user;
  const games = req.body.games;

  const newUser = {
    user,
    games
  }

  const { db } = await connectToDatabase();

  const movies = await db
    .collection("users")
    .insertOne(newUser)

  res.json({ user, games });
};
