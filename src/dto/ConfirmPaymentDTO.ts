import { z } from "zod";

export const confirmPaymentDTOSchema = z.object({
  payment: z.string(),
});

export type ConfirmPaymentDTO = z.infer<typeof confirmPaymentDTOSchema>;
