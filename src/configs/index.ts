import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  PORT: z.string(),
});

const env = envSchema.parse(process.env);

const configs = {
  port: +env.PORT,
};

export default configs;
