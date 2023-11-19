import mongoose, { Schema, model } from "mongoose";

const productAttributeSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
  status: { type: Boolean, default: true },
});

const productPricingSchema = new mongoose.Schema({
  attribute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductAttribute",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const imageSchema = new Schema(
  {
    url: { type: String, required: true },
    altText: String,
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    attributes: [productAttributeSchema], //array of attributes
    pricing: [productPricingSchema], //array of prices for the different attributes
    images: [imageSchema], //array of images for a product
    singlePrice: { type: Number }, //For products without attributes and have single price.
    status: { type: Boolean, default: true },
    inventory_quantity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inventory",
      required: true,
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
export default Product;
