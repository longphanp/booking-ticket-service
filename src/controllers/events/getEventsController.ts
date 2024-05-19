import { Request, Response } from "express";
import getEvents from "services/events/getEvents";

export default async function getEventsController(req: Request, res: Response) {
  const data = await getEvents();
  res.json({ data });
}
