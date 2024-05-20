import { bookingSeatKey } from "constants/cache";
import { CreatePaymentDTO } from "dto/CreatePaymentDTO";
import getRedisClient from "resources/redis";

export default async function releaseSeat(data: CreatePaymentDTO) {
  const { event, seats } = data;
  const redis = await getRedisClient();
  const result = await redis.del(
    seats.map(seat => bookingSeatKey(event, seat)),
  );
  return result;
}
