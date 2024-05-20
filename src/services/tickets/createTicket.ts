import { TicketDTO } from "dto/TicketDTO";
import Ticket from "models/Ticket";

export default async function createTicket(data: TicketDTO) {
  const ticket = await Ticket.create(data);
  return ticket;
}
