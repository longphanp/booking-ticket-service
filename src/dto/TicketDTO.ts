import { z } from "zod";

export const ticketDTOSchema = z.object({
  event: z.string(),
  area: z.string(),
  price: z.number(),
});

export type TicketDTO = z.infer<typeof ticketDTOSchema>;
