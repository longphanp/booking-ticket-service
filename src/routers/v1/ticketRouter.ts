import createTicketController from "controllers/tickets/createTicketController";
import deleteTicketController from "controllers/tickets/deleteTicketController";
import getTicketController from "controllers/tickets/getTicketController";
import getTicketsController from "controllers/tickets/getTicketsController";
import updateTicketController from "controllers/tickets/updateTicketController";
import { ticketDTOSchema } from "dto/TicketDTO";
import { Router } from "express";
import validateSchema from "middlewares/valdiateSchema";

const ticketRouter = Router();

ticketRouter.get("", getTicketsController);
ticketRouter.get("/:id", getTicketController);

ticketRouter.post(
  "",
  validateSchema("body", ticketDTOSchema),
  createTicketController,
);

ticketRouter.put(
  "/:id",
  validateSchema("body", ticketDTOSchema),
  updateTicketController,
);

ticketRouter.delete("/:id", deleteTicketController);

export default ticketRouter;
