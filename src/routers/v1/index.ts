import { Router } from "express";

import areaRouter from "./areaRouter";
import authRouter from "./authRouter";
import bookingRouter from "./bookingRouter";
import eventRouter from "./eventRouter";
import paymentRouter from "./paymentRouter";
import seatRouter from "./seatRouter";
import ticketRouter from "./ticketRouter";

const v1 = Router();

v1.use("/events", eventRouter);
v1.use("/auth", authRouter);
v1.use("/seats", seatRouter);
v1.use("/areas", areaRouter);
v1.use("/tickets", ticketRouter);
v1.use("/bookings", bookingRouter);
v1.use("/payments", paymentRouter);

export default v1;
