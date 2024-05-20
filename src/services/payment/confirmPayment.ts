import { ConfirmPaymentDTO } from "dto/ConfirmPaymentDTO";
import BookingModel from "models/Booking";
import PaymentModel from "models/Payment";
import SeatModel from "models/Seat";
import TicketModel from "models/Ticket";
import getMongoDb from "resources/mongodb";

export default async function confirmPayment(
  userId: string,
  data: ConfirmPaymentDTO,
) {
  const db = await getMongoDb();
  const session = await db.startSession();
  try {
    const res = await session.withTransaction(async () => {
      const payment = await PaymentModel.findOneAndUpdate(
        {
          user: userId,
          _id: data.payment,
          status: "PENDING",
        },
        { status: "SUCCESS" },
        { session, new: true },
      );

      const seatAreas = await SeatModel.find({
        _id: { $in: payment?.seats },
      }).session(session);

      const tickets = await TicketModel.find({
        event: payment?.event,
        area: { $in: seatAreas.map(seat => seat.area) },
      }).session(session);

      const areaMap = seatAreas?.reduce(
        (m, seat) => ({ ...m, [seat.id]: seat.area }),
        {} as Record<string, string>,
      );

      const ticketMap = tickets?.reduce(
        (m, ticket) => ({ ...m, [ticket.area]: ticket.id }),
        {} as Record<string, string>,
      );
      await BookingModel.insertMany(
        payment?.seats.map(seat => ({
          user: userId,
          ticket: ticketMap[areaMap[seat]],
          seat: seat,
        })),
        { session },
      );

      return payment;
    });

    return res;
  } catch (e) {
    await session.endSession();
    throw e;
  }
}
