import { z } from "zod";

export const eventDTOSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  startAt: z.coerce.date(),
  endAt: z.coerce.date(),
});

export type EventDTO = z.infer<typeof eventDTOSchema>;
