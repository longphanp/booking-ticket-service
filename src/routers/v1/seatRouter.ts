import getBookedSeatsController from "controllers/seats/getBookedSeatsController";
import getSeatsController from "controllers/seats/getSeatsController";
import { queryBookedSeatDTOSchema } from "dto/QueryBookedSeatDTO";
import { querySeatDTOSchema } from "dto/QuerySeatDTO";
import { Router } from "express";
import validateSchema from "middlewares/valdiateSchema";

const seatRouter = Router();

seatRouter.get(
  "/",
  validateSchema("query", querySeatDTOSchema),
  getSeatsController,
);

seatRouter.get(
  "/booked",
  validateSchema("query", queryBookedSeatDTOSchema),
  getBookedSeatsController,
);

export default seatRouter;
