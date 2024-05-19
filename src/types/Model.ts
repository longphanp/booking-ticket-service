import { Document } from "mongoose";

export default interface Model extends Document {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
