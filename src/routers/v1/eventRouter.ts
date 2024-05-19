import createEventController from "controllers/events/createEventController";
import getEventController from "controllers/events/getEventsController";
import { Router } from "express";
import validateSchema from "middlewares/valdiateSchema";
import { eventDTOSchema } from "types/EventDTO";

const eventRouter = Router();

eventRouter.get("", getEventController);
eventRouter.post(
  "",
  validateSchema("body", eventDTOSchema),
  createEventController,
);

export default eventRouter;
