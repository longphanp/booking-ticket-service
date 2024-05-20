import { TicketDTO } from "dto/TicketDTO";
import Ticket from "models/Ticket";

export default async function updateTicket(ticketId: string, data: TicketDTO) {
  const ticket = await Ticket.findOneAndUpdate({ _id: ticketId }, data, {
    new: true,
  });
  return ticket;
}
