import dbConnect from "../../../lib/dbConnect";
import Post from "../../../models/Post";


export async function getAllPosts() {
    await dbConnect();
    const posts = await Post.find({}).sort({ date_created: 1 });

    return posts
}

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
          const posts = await getAllPosts();

        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const post = await Post.create(
          req.body
        ); /* create a new model in the database */

        res.status(201).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
