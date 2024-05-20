import { Schema, model } from "mongoose";
import Area from "types/Area";

export const areaSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
);

areaSchema.index({ email: 1 });

const AreaModel = model<Area>("areas", areaSchema);
export default AreaModel;
