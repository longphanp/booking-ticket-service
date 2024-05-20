import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import deleteTicket from "services/tickets/deleteTicket";

async function deleteTicketController(req: Request, res: Response) {
  const data = await deleteTicket(req.params.id);
  res.json({ data });
}

export default withTryCatch(deleteTicketController);
