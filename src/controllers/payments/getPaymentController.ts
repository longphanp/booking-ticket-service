import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import getPayment from "services/payment/getPayment";

async function getPaymentController(req: Request, res: Response) {
  const data = await getPayment(req.params.id);
  res.json({ data: data });
}

export default withTryCatch(getPaymentController);
