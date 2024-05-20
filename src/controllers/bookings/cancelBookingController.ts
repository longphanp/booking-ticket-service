import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import cancelBooking from "services/bookings/cancelBooking";

async function cancelBookingController(req: Request, res: Response) {
  const data = await cancelBooking(req.userId!, req.params.id);
  res.json({ data: data });
}

export default withTryCatch(cancelBookingController);
