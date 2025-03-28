// import mongoose, { Schema, model, models } from "mongoose";

// export const orderSchema = new Schema(
//   {
//     userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
//     products: [
//       {
//         productId: {
//           type: Schema.Types.ObjectId,
//           ref: "Product",
//           required: true,
//         },
//         quantity: { type: Number, required: true, min: 1 },
//         price: { type: Number, required: true },
//       },
//     ],
//     totalAmount: { type: Number, required: true },
//     status: {
//       type: String,
//       enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
//       default: "pending",
//     },
//     paymentStatus: {
//       type: String,
//       enum: ["pending", "paid", "failed"],
//       default: "pending",
//     },
//     paymentMethod: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// export const Order = models?.Order || model("Order", orderSchema);
import mongoose, { Schema, model, models } from "mongoose";

export const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
        isSubscription: { type: Boolean, default: false },
        subscriptionDetails: {
          duration: {
            type: String,
            enum: ["monthly", "yearly"],
            required: false,
          },
          startDate: { type: Date, required: false }, 
          endDate: { type: Date, required: false }, 
          autoRenew: { type: Boolean, default: false },
        },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    paymentMethod: { type: String, required: true },
  },
  { timestamps: true }
);

export const Order = models?.Order || model("Order", orderSchema);
