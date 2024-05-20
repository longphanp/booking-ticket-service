import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import getPayments from "services/payment/getPayments";

async function getPaymentsController(req: Request, res: Response) {
  const data = await getPayments(req.userId!);
  res.json({ data: data });
}

export default withTryCatch(getPaymentsController);
