import { z } from "zod";

import { queryDTOSchema } from "./QueryDTO";

export const queryTicketDTOSchema = z
  .object({
    eventId: z.string().optional(),
  })
  .merge(queryDTOSchema);

export type QueryTicketDTO = z.infer<typeof queryTicketDTOSchema>;
