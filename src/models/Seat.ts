import { Schema, model } from "mongoose";
import Seat from "types/Seat";

export const seatSchema = new Schema(
  {
    number: { type: Number, required: true },
    area: { type: String, ref: "areas", required: true },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
);

seatSchema.index({ number: 1, area: 1 }, { unique: true });
seatSchema.index({ areaId: 1 });

const SeatModel = model<Seat>("seats", seatSchema);
export default SeatModel;
