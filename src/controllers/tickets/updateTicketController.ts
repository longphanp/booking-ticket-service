import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import udpateTicket from "services/tickets/udpateTicket";

async function updateTicketController(req: Request, res: Response) {
  const data = await udpateTicket(req.params.id, req.body);
  res.json({ data });
}

export default withTryCatch(updateTicketController);
