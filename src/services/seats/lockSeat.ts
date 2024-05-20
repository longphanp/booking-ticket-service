import { bookingSeatKey } from "constants/cache";
import { CreatePaymentDTO } from "dto/CreatePaymentDTO";
import getRedisClient from "resources/redis";

export default async function lockSeat(data: CreatePaymentDTO) {
  const { event, seats } = data;
  const redis = await getRedisClient();
  const keys = seats.map(seat => bookingSeatKey(event, seat));
  const res = await redis.mSetNX(
    keys.map(key => [key, "true"] as [string, string]),
  );
  return res;
}
