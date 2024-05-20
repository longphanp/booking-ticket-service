import { ObjectId } from "mongoose";
import { z } from "zod";

import { queryDTOSchema } from "./QueryDTO";

export const queryBookedSeatDTOSchema = z
  .object({
    eventId: z.custom<ObjectId>().optional(),
  })
  .merge(queryDTOSchema);

export type QueryBookedSeatDTO = z.infer<typeof queryBookedSeatDTOSchema>;
