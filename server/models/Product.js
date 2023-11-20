import mongoose, { Schema, model } from "mongoose";

const productAttributeSchema = new Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
  status: { type: Boolean, default: true },
});

const productPricingSchema = new Schema({
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
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    sku: { type: String, unique: true },
    brand: { type: String },
    description: { type: String, required: true },
    attribute: [productAttributeSchema], //array of attributes
    price: [productPricingSchema], //array of prices for the different attributes
    image: [imageSchema], //array of images for a product
    singlePrice: { type: Number }, //For products without attributes and have single price.
    status: { type: Boolean, default: true },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
      required: true,
    },
    purchasePrices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PurchasePrice",
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Product = model("Product", productSchema);
export default Product;
