import confirmPaymentController from "controllers/payments/confirmPaymentController";
import createPaymentController from "controllers/payments/createPaymentController";
import getPaymentController from "controllers/payments/getPaymentController";
import getPaymentsController from "controllers/payments/getPaymentsController";
import { confirmPaymentDTOSchema } from "dto/ConfirmPaymentDTO";
import { createPaymentDTOSchema } from "dto/CreatePaymentDTO";
import { Router } from "express";
import authMiddlware from "middlewares/authMiddleware";
import validateSchema from "middlewares/valdiateSchema";

const paymentRouter = Router();

paymentRouter.get("/", authMiddlware, getPaymentsController);
paymentRouter.get("/:id", authMiddlware, getPaymentController);

paymentRouter.post(
  "/",
  authMiddlware,
  validateSchema("body", createPaymentDTOSchema),
  createPaymentController,
);

paymentRouter.post(
  "/confirm",
  authMiddlware,
  validateSchema("body", confirmPaymentDTOSchema),
  confirmPaymentController,
);

export default paymentRouter;
