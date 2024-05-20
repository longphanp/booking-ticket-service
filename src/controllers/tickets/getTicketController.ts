import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import getTicket from "services/tickets/getTicket";

async function getTicketsController(req: Request, res: Response) {
  const data = await getTicket(req.params.id);
  res.json({ data });
}

export default withTryCatch(getTicketsController);
