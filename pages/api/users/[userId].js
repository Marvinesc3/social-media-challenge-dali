import { ObjectID } from "bson";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function (req, res) {
  const { userId } = req.query;
  await dbConnect();

  const user = await User.findOne(
    { _id: ObjectID(userId) },
    {
      name: 1,
      quote: 1,
    }
  );

  res.json(user);
}
