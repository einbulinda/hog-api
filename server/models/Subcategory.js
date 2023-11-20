import { Schema, model } from "mongoose";

const subcategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Subcategory = model("Subcategory", subcategorySchema);

export default Subcategory;
