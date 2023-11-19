import { Schema, model } from "mongoose";

const inventorySchema = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, required: true },
    last_updated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Inventory = model("Inventory", inventorySchema);

export default Inventory;
