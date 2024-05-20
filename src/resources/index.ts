import { connectMongo } from "./mongodb";
import { connectRabbitMq } from "./rabbitmq";
import { connectRedis } from "./redis";

export default async function initResources() {
  return Promise.all([connectMongo(), connectRedis(), connectRabbitMq()]);
}
