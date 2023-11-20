import { Schema, model } from "mongoose";

const productAttributeSchema = new Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
  status: { type: Boolean, default: true },
});

const ProductAttribute = model("ProductAttribute", productAttributeSchema);

export default ProductAttribute;
