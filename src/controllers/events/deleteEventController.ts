import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import deleteEvent from "services/events/deleteEvent";

async function deleteEventController(req: Request, res: Response) {
  const data = await deleteEvent(req.params.id);
  res.json({ data });
}

export default withTryCatch(deleteEventController);
