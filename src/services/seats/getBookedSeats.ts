import { QueryBookedSeatDTO } from "dto/QueryBookedSeatDTO";
import getRedisClient from "resources/redis";

export default async function getBookedSeats(query?: QueryBookedSeatDTO) {
  const redis = await getRedisClient();
  const keys = await redis.keys(`event:${query?.eventId}:*`);
  const seatIds = keys.map(key => {
    return key.split(":").slice(-1)[0];
  });

  return seatIds;
}
