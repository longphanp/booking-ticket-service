import { connectMongo } from "./mongodb";

export default function initResources() {
  return Promise.all([connectMongo()]);
}
