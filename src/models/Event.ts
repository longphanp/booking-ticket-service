import { Model, Schema, model } from "mongoose";

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

const EventModel: Model<Event> = model<Event>("events", eventSchema);
export default EventModel;
