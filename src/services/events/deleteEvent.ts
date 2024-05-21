import EventModel from "models/Event";
import TicketModel from "models/Ticket";
import getMongoDb from "resources/mongodb";

export default async function deleteEvent(eventId: string) {
  const db = await getMongoDb();
  const session = await db.startSession();
  try {
    const res = await session.withTransaction(async () => {
      const data = await EventModel.findOneAndDelete(
        { _id: eventId },
        { session },
      );

      await TicketModel.deleteMany({ event: data?._id }, { session });
      return data;
    });

    return res;
  } catch (e) {
    await session.endSession();
    throw e;
  }
}
