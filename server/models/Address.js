import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  county: { type: String, required: true },
  town: { type: String, required: true },
  street: { type: String, required: true },
  landmark: { type: String, required: true },
  description: { type: String, required: true },
});

const Address = model("Address", addressSchema);

export default Address;
