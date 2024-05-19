import { z } from "zod";

export const credentialSchema = z.object({
  clientId: z.string(),
  credential: z.string(),
});

export type CredentialDTO = z.infer<typeof credentialSchema>;
