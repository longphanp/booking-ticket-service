import { QueryTicketDTO } from "dto/QueryTicketDTO";
import TicketModel from "models/Ticket";

export default async function getTickets(query: QueryTicketDTO) {
  const { eventId } = query;

  const data = await TicketModel.find({
    ...(eventId && {
      event: eventId,
    }),
  }).populate(["event", "area"]);
  return data;
}
