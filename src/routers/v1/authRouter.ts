import loginController from "controllers/auth/login";
import { credentialSchema } from "dto/CredentialDTO";
import { Router } from "express";
import validateSchema from "middlewares/valdiateSchema";

const authRouter = Router();

authRouter.post(
  "/google",
  validateSchema("body", credentialSchema),
  loginController,
);

export default authRouter;
