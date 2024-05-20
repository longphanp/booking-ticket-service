import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import getBookedSeats from "services/seats/getBookedSeats";

async function getBookedSeatsController(req: Request, res: Response) {
  const data = await getBookedSeats(req.query);
  res.json({ data });
}

export default withTryCatch(getBookedSeatsController);
