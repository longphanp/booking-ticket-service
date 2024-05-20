import { DEFAULT_OFFSET, DEFAULT_SIZE } from "constants/pagination";
import { QuerySeatDTO } from "dto/QuerySeatDTO";
import SeatModel from "models/Seat";

export default async function getSeats(query?: QuerySeatDTO) {
  const { areaId, size = DEFAULT_SIZE, offset = DEFAULT_OFFSET } = query!;
  const data = await SeatModel.find({ ...(areaId && { areaId }) })
    .populate("area")
    .limit(size)
    .skip(offset);

  return data;
}
