import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import createTicket from "services/tickets/createTicket";

async function createTicketController(req: Request, res: Response) {
  const data = await createTicket(req.body);
  res.json({ data });
}

export default withTryCatch(createTicketController);
