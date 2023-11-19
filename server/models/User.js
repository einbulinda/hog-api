import { Schema, model } from "mongoose";
import { isEmail } from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Create User schema for creating new users.
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!isEmail(value)) {
          throw new Error("Invalid Email");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 7,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("Password must not contain word password");
        }
      },
    },
    mobile_number: { type: String },
    shipping_address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" }, // Reference to the Address model
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
