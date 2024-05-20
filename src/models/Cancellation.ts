import { Schema, model } from "mongoose";
import Cancellation from "types/Cancellation";

export const cancellationSchema = new Schema(
  {
    booking: { type: String, required: true, ref: "bookings" },
    reason: { type: String },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
);

const CancellationModel = model<Cancellation>(
  "cancellations",
  cancellationSchema,
);

export default CancellationModel;
