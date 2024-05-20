import BookingModel from "models/Booking";
import CancellationModel from "models/Cancellation";
import TicketModel from "models/Ticket";
import getMongoDb from "resources/mongodb";

export default async function cancelBooking(userId: string, bookingId: string) {
  const db = await getMongoDb();
  const session = await db.startSession();

  try {
    const res = await session.withTransaction(async () => {
      const booking = await BookingModel.findOne({
        _id: bookingId,
        user: userId,
        status: "ACTIVE",
      }).session(session);

      const ticket = await TicketModel.findOne({ _id: booking?.ticket });

      if (!ticket?.cancellable) {
        return null;
      }

      await booking?.updateOne({ status: "CANCELED" }, { session, new: true });

      const cancellation = await CancellationModel.create(
        [{ booking: booking?.id }],
        { session },
      );

      return cancellation;
    });

    return res;
  } catch (e) {
    await session.endSession();
    throw e;
  }
}
