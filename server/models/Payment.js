import { Schema, model } from "mongoose";

const paymentSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: { type: Number, required: true },
    payment_date: { type: Date, default: Date.now },
    payment_method: String,
    status: { type: String, default: "completed" },
  },
  { timestamps: true }
);

const Payment = model("Payment", paymentSchema);

export default Payment;
