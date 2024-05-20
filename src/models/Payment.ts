import { Schema, model } from "mongoose";
import Payment, { PAYMENT_STATUS } from "types/Payment";

export const paymentSchema = new Schema(
  {
    user: { type: String, required: true, ref: "users" },
    event: { type: String, required: true, ref: "events" },
    seats: { type: [String], required: true, ref: "seats" },
    totals: { type: Number, required: true },
    status: {
      type: String,
      enum: PAYMENT_STATUS,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
);

const PaymentModel = model<Payment>("payments", paymentSchema);
export default PaymentModel;
