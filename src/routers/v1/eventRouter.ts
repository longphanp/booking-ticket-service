import createEventController from "controllers/events/createEventController";
import deleteEventController from "controllers/events/deleteEventController";
import getEventController from "controllers/events/getEventsController";
import updateEventController from "controllers/events/updateEventController";
import { eventDTOSchema } from "dto/EventDTO";
import { Router } from "express";
import validateSchema from "middlewares/valdiateSchema";

const eventRouter = Router();

eventRouter.get("", getEventController);
eventRouter.post(
  "",
  validateSchema("body", eventDTOSchema),
  createEventController,
);
eventRouter.put(
  "/:id",
  validateSchema("body", eventDTOSchema),
  updateEventController,
);
eventRouter.delete("/:id", deleteEventController);

export default eventRouter;
