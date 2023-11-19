import { Schema, model } from "mongoose";

const promotionSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    discount_percent: { type: Number, required: true },
  },
  { timestamps: true }
);

const Promotion = model("Promotion", promotionSchema);

export default Promotion;
