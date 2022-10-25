import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const MAX_CHARACTER_LIMIT = 280

const PostSchema = new mongoose.Schema(
  {
    name: {
      /* user who created the post */
      type: String,
      required: [true, "Please provide a username for this post."],
    },
    user_id: {
      /* user_id who created the post */
      type: ObjectId,
      required: true,
    },
    dateCreated: {
      /* date the post was published */
      type: String,
      required: true,
    },
    message: {
      /* contents of this post */
      type: String,
      required: [true, "Please provide a message of length 1-" + MAX_CHARACTER_LIMIT + " characters."],
      maxLength: MAX_CHARACTER_LIMIT,
    },
    likes: {
      /* number of likes associated with this post */
      type: Number,
    },
  },
  {
    collection: "posts",
    versionKey: false, // turns off versioning
  }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
