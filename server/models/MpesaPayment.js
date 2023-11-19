import { Schema, model } from "mongoose";

const mpesaPaymentSchema = new Schema(
  {
    transaction_id: { type: String, required: true },
    mobile: { type: String, required: true },
    amount: { type: Number, required: true },
    payment_date: { type: Date, required: true },
  },
  { timestamps: true }
);

const MpesaPayment = model("MpesaPayment", mpesaPaymentSchema);

export default MpesaPayment;
