import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import createEvent from "services/events/createEvent";

async function createEventController(req: Request, res: Response) {
  const data = await createEvent(req.body);
  res.json({ data });
}

export default withTryCatch(createEventController);
