import HttpError from "exceptions/HttpError";
import errorCode from "exceptions/errorCode";
import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import { sendPaymentExpireEvent } from "queues/paymentExpire";
import createPayment from "services/payment/createPayment";
import lockSeat from "services/seats/lockSeat";
import releaseSeat from "services/seats/releaseSeat";

async function createPaymentController(req: Request, res: Response) {
  const result = await lockSeat(req.body);
  if (!result) {
    throw new HttpError("Seat already taken", errorCode.seatAlreadyTaken);
  }

  try {
    const data = await createPayment(req.userId!, req.body);
    sendPaymentExpireEvent(data._id);
    res.json({ data: data });
  } catch (e) {
    await releaseSeat(req.body);
    throw e;
  }
}

export default withTryCatch(createPaymentController);
