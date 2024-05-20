import { ObjectId } from "mongoose";
import { z } from "zod";

import { queryDTOSchema } from "./QueryDTO";

export const querySeatDTOSchema = z
  .object({
    areaId: z.custom<ObjectId>().optional(),
  })
  .merge(queryDTOSchema);

export type QuerySeatDTO = z.infer<typeof querySeatDTOSchema>;
