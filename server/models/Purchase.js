// models/PurchasePrice.js

import { Schema, model } from "mongoose";

const purchasePriceSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const PurchasePrice = model("PurchasePrice", purchasePriceSchema);

export default PurchasePrice;
