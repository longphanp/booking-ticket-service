import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number(),
  MONGO_SCHEME: z.string(),
  MONGO_USERNAME: z.string(),
  MONGO_PASSWORD: z.string(),
  MONGO_HOST: z.string(),
  MONGO_DB: z.string(),

  REDIS_HOST: z.string(),
  REDIS_PORT: z.coerce.number(),
  REDIS_PASSWORD: z.string(),

  RABBITMQ_PROTOCOL: z.string(),
  RABBITMQ_HOST: z.string(),
  RABBITMQ_PORT: z.coerce.number(),
  RABBITMQ_USERNAME: z.string(),
  RABBITMQ_PASSWORD: z.string(),

  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),

  GMAIL_USERNAME: z.string(),
  GMAIL_PASSWORD: z.string(),
});

const env = envSchema.parse(process.env);

const configs = {
  port: +env.PORT,
  mongo: {
    scheme: env.MONGO_SCHEME,
    username: env.MONGO_USERNAME,
    password: env.MONGO_PASSWORD,
    host: env.MONGO_HOST,
    db: env.MONGO_DB,
  },

  redis: {
    host: env.REDIS_HOST,
    port: +env.REDIS_PORT,
    password: env.REDIS_PASSWORD,
  },

  rabbitMq: {
    protocol: env.RABBITMQ_PROTOCOL,
    host: env.RABBITMQ_HOST,
    port: +env.RABBITMQ_PORT,
    username: env.RABBITMQ_USERNAME,
    password: env.RABBITMQ_PASSWORD,
  },

  google: {
    clientId: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
  },

  gmail: {
    username: env.GMAIL_USERNAME,
    password: env.GMAIL_PASSWORD,
  },
};

export default configs;
