import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: "Address" }, // Reference to the Address model
  total_price: { type: Number, required: true },
  order_date: { type: Date, default: Date.now },
  status: { type: String, default: "pending" },
});

const Order = model("Order", orderSchema);

export default Order;
