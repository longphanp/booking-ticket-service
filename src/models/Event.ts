import { Schema, model } from "mongoose";
import Event from "types/Event";

export const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    startAt: { type: Date, required: true },
    endAt: { type: Date, required: true },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
);

const EventModel = model<Event>("events", eventSchema);
export default EventModel;
