import { Schema, model } from "mongoose";
import Ticket from "types/Ticket";

export const ticketSchema = new Schema(
  {
    event: { type: String, ref: "events", required: true },
    area: { type: String, ref: "areas", required: true },
    price: { type: Number, required: true },
    cancellable: { type: Boolean, default: true },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
);

ticketSchema.index({ event: 1, area: 1 }, { unique: true });

const TicketModel = model<Ticket>("tickets", ticketSchema);

export default TicketModel;
