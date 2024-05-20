import TicketModel from "models/Ticket";

export default async function getTicket(ticketId: string) {
  const data = await TicketModel.findOne({
    _id: ticketId,
  }).populate(["event", "area"]);
  return data;
}
