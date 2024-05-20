import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import getSeats from "services/seats/getSeats";

async function getSeatsController(req: Request, res: Response) {
  const data = await getSeats(req.query);
  res.json({ data });
}

export default withTryCatch(getSeatsController);
