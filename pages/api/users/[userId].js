import { ObjectID } from "bson";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export async function getUserData(userId) {
  await dbConnect();

  const userData = await User.findOne(
    { _id: ObjectID(userId) },
  );

  return userData
}

export default async function (req, res) {
  const { userId } = req.query
  const data = await getUserData(userId)

  res.status(200).json(data);
}
