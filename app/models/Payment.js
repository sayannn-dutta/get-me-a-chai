/*'use client'
import mongoose, { Schema, model, models } from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema ({
    name: { type: String, requred: true },
    to_user: { type: String, require: true },
    oid: { type: String, require: true },
    message: { type: String },
    amount: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
});
export default mongoose.models.Payment || model("Payment", PaymentSchema);*/

import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const PaymentSchema = new Schema({
  name: { type: String, required: true },
  to_user: { type: String, required: true },
  oid: { type: String, required: true },
  message: { type: String },
  amount: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  done: { type: Boolean, default: false }
});

export default models.Payment || model("Payment", PaymentSchema);
