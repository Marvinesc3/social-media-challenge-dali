import { ObjectID } from "bson";
import dbConnect from "../../../lib/dbConnect";
import Post from "../../../models/Post";

export default async function handler(req, res) {
  const { postId } = req.query;
  await dbConnect();

  const post = await Post.findOne({
    _id: ObjectID(postId),
  });

  res.status(200).Postjson(post);
}
