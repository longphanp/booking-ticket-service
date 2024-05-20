import configs from "configs";
import { logger } from "logger";
import mongoose from "mongoose";

let db: mongoose.Connection;

export async function connectMongo() {
  const mongoConfig = configs.mongo;
  const mongoURI = `${mongoConfig.scheme}://${mongoConfig.host}`;
  const connection = mongoose.connection;

  connection.on("error", err => {
    logger.error(`MongoDB connection error: ${err}`);
  });

  connection.on("connected", () => {
    logger.info("Connected to MongoDB!");
  });

  await mongoose.connect(mongoURI, {
    user: mongoConfig.username,
    pass: mongoConfig.password,
    dbName: mongoConfig.db,
  });

  return connection;
}

export default async function getMongoDb() {
  if (!db) {
    db = await connectMongo();
  }

  return db;
}
