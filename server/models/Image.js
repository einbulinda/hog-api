import { Schema, model } from "mongoose";

const imageSchema = new Schema(
  {
    url: { type: String, required: true },
    altText: String,
  },
  { timestamps: true }
);

const Image = model("Image", imageSchema);

export default Image;
