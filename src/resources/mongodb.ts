import configs from "configs";
import { logger } from "logger";
import mongoose from "mongoose";

export async function connectMongo() {
  const mongoConfig = configs.mongo;
  const mongoURI = `${mongoConfig.scheme}://${mongoConfig.host}`;
  const db = mongoose.connection;

  db.on("error", err => {
    logger.error(`MongoDB connection error: ${err}`);
  });

  db.on("connected", () => {
    logger.info("Connected to MongoDB!");
  });

  await mongoose.connect(mongoURI, {
    user: mongoConfig.username,
    pass: mongoConfig.password,
    dbName: mongoConfig.db,
  });

  return db;
}
