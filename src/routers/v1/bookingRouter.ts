import cancelBookingController from "controllers/bookings/cancelBookingController";
import getBookingsController from "controllers/bookings/getBookingsController";
import { Router } from "express";
import authMiddlware from "middlewares/authMiddleware";

const bookingRouter = Router();

bookingRouter.get("", authMiddlware, getBookingsController);
bookingRouter.post("/:id/cancel", authMiddlware, cancelBookingController);

export default bookingRouter;
