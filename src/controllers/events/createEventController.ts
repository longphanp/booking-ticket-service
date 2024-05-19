import { Request, Response } from "express";
import createEvent from "services/events/createEvent";

export default async function createEventController(
  req: Request,
  res: Response,
) {
  const data = await createEvent(req.body);
  res.json({ data });
}
