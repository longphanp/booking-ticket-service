import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import getTickets from "services/tickets/getTickets";

async function getTicketsController(req: Request, res: Response) {
  const data = await getTickets(req.query);
  res.json({ data });
}

export default withTryCatch(getTicketsController);
