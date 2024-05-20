import configs from "configs";
import { logger } from "logger";
import { RedisClientType, createClient } from "redis";

let client: RedisClientType;

export async function connectRedis() {
  const { host, port, password } = configs.redis;

  client = createClient({
    password: password,
    socket: {
      host: host,
      port: port,
    },
  });

  client.on("error", err => logger.error(`Redis connection get error: ${err}`));
  client.on("ready", () => logger.info("Connected to Redis!"));

  await client.connect();

  return client;
}

export default async function getRedisClient() {
  if (!client) {
    client = await connectRedis();
  }

  return client;
}
