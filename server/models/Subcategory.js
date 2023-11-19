import { Schema, model } from "mongoose";

const subcategorySchema = new Schema(
  {
    name: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

const Subcategory = model("Subcategory", subcategorySchema);

export default Subcategory;
