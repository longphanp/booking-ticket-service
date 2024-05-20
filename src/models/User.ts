import { Schema, model } from "mongoose";
import User from "types/User";

export const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    isAdmin: { type: Boolean, default: true },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
);

userSchema.index({ email: 1 });

const UserModel = model<User>("users", userSchema);
export default UserModel;
