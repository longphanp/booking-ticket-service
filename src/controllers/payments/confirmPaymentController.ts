import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import { sendPaymentNotificationEvent } from "queues/paymentNotification";
import confirmPayment from "services/payment/confirmPayment";

async function confirmPaymentController(req: Request, res: Response) {
  const data = await confirmPayment(req.userId!, req.body);
  if (data) {
    sendPaymentNotificationEvent(data._id);
  }

  res.send({ data });
}

export default withTryCatch(confirmPaymentController);
