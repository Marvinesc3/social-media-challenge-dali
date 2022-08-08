import { connectToDatabase } from "../../lib/connect";

export default async (req, res) => {
    const { db } = await connectToDatabase();

    const users = await db
        .collection("public")
        .find({})
        .sort({ name: 1 })
        .limit(20)
        .toArray();

    res.json(users);
}