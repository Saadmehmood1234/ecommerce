import mongoose, { Schema, model, models } from "mongoose";

export const cartSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
        subscriptionPlan: {
          type: String,
          enum: ["monthly", "yearly"],
        },
      },
    ],
    totalPrice: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export const Cart = models?.Cart || model("Cart", cartSchema);
