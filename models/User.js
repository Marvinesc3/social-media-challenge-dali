import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    "American Indian or Alaska Native": {
      type: String,
    },
    Asian: {
      type: String,
    },
    "Black or African American": {
      type: String,
    },
    "Hispanic or Latino": {
      type: String,
    },
    "Middle Eastern": {
      type: String,
    },
    "Native Hawaiian or Other Pacific Islander": {
      type: String,
    },
    White: {
      type: String,
    },
    Other: {
      type: String,
    },
    major: {
      /* user who created the post */
      type: String,
    },
    minor: {
      /* user who created the post */
      type: String,
    },
    modification: {
      type: String,
    },
    birthday: {
      type: String,
    },
    role: {
      type: String,
    },
    home: {
      type: String,
    },
    quote: {
      type: String,
    },
    favoriteShoe: {
      type: String,
    },
    favoriteArtist: {
      type: String,
    },
    favoriteColor: {
      type: String,
    },
    phoneType: {
      type: String,
    },
  },
  {
    collection: "public",
    versionKey: false, // turns off versioning
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
