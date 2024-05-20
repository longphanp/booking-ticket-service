import { Schema, model } from "mongoose";
import Booking, { BOOKING_STATUS } from "types/Booking";

export const bookingSchema = new Schema(
  {
    user: { type: String, required: true, ref: "users" },
    ticket: { type: String, required: true, ref: "tickets" },
    seat: { type: String, required: true, ref: "seats" },
    status: { type: String, enum: BOOKING_STATUS, default: "ACTIVE" },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
);

bookingSchema.index({ user: 1 });

const BookingModel = model<Booking>("bookings", bookingSchema);

export default BookingModel;
