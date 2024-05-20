import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import getEvents from "services/events/getEvents";

async function getEventsController(req: Request, res: Response) {
  const data = await getEvents();
  res.json({ data });
}

export default withTryCatch(getEventsController);
