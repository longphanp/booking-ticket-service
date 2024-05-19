import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number(),
  MONGO_SCHEME: z.string(),
  MONGO_USERNAME: z.string(),
  MONGO_PASSWORD: z.string(),
  MONGO_HOST: z.string(),
  MONGO_DB: z.string(),

  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
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

  google: {
    clientId: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
  },
};

export default configs;
