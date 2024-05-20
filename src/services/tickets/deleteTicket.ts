import TicketModel from "models/Ticket";

export default async function deleteTicket(ticketId: string) {
  const data = await TicketModel.findOneAndDelete({ _id: ticketId });
  return data;
}
