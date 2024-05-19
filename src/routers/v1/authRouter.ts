import loginController from "controllers/auth/login";
import { Router } from "express";
import validateSchema from "middlewares/valdiateSchema";
import { credentialSchema } from "types/CredentialDTO";

const authRouter = Router();

authRouter.post(
  "/google",
  validateSchema("body", credentialSchema),
  loginController,
);

export default authRouter;
