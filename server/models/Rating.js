import { Schema, model } from "mongoose";

const ratingSchema = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: { type: Number, required: true },
    comment: String,
  },
  { timestamps: true }
);

const Rating = model("Rating", ratingSchema);

export default Rating;
