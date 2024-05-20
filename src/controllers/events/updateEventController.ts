import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import updateEvent from "services/events/updateEvent";

async function updateEventController(req: Request, res: Response) {
  const data = await updateEvent(req.params.id, req.body);
  res.json({ data });
}

export default withTryCatch(updateEventController);
