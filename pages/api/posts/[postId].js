import { ObjectID } from "bson";
import dbConnect from "../../../lib/dbConnect";
import Post from "../../../models/Post";

export default async function handler(req, res) {
  const { postId } = req.query;
  await dbConnect();

  const post = await Post.findOne({
        _id: ObjectID(postId),
  });
  
  switch (req.method) {
    case 'GET':
      res.status(200).json(post);
      break;
    case 'PUT':
      await Post.findByIdAndUpdate(ObjectID(postId), { $inc: { "likes": 1 } })

      res.status(200).json(post)
      break;
  } 
 
}
