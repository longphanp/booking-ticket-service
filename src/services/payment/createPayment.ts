import { CreatePaymentDTO } from "dto/CreatePaymentDTO";
import PaymentModel from "models/Payment";
import SeatModel from "models/Seat";
import TicketModel from "models/Ticket";
import getMongoDb from "resources/mongodb";

export default async function createPayment(
  userId: string,
  data: CreatePaymentDTO,
) {
  const { event, seats } = data;
  const db = await getMongoDb();
  const session = await db.startSession();

  try {
    const res = await session.withTransaction(async () => {
      const seatAreas = await SeatModel.find({ _id: { $in: seats } }).session(
        session,
      );

      const tickets = await TicketModel.find({
        event: event,
        area: { $in: seatAreas.map(seat => seat.area) },
      }).session(session);

      const ticketsMap = tickets?.reduce(
        (m, ticket) => ({ ...m, [ticket.area]: ticket.price }),
        {} as Record<string, number>,
      );

      const totalPayment = seatAreas?.reduce(
        (total, seat) => total + ticketsMap?.[seat.area],
        0,
      );

      const payment = await PaymentModel.create(
        [
          {
            event: event,
            seats: seats,
            user: userId,
            totals: totalPayment,
            status: "PENDING",
          },
        ],
        { session: session },
      );

      return payment?.[0];
    });

    return res;
  } catch (e) {
    await session.endSession();
    throw e;
  }
}
