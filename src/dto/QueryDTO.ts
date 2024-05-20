import { z } from "zod";

export const queryDTOSchema = z.object({
  size: z.number().optional(),
  offset: z.number().optional(),
});

export type QueryDTO = z.infer<typeof queryDTOSchema>;
