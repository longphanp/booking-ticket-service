import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import getBookings from "services/bookings/getBookings";

async function getBookingsController(req: Request, res: Response) {
  const data = await getBookings(req.userId!);
  res.json({ data: data });
}

export default withTryCatch(getBookingsController);
