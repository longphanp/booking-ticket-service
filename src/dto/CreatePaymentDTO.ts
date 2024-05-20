import { z } from "zod";

export const createPaymentDTOSchema = z.object({
  event: z.string(),
  seats: z.string().array(),
});

export type CreatePaymentDTO = z.infer<typeof createPaymentDTOSchema>;
