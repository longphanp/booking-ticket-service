import { EventDTO } from "dto/EventDTO";
import EventModel from "models/Event";

export default async function updateEvent(eventId: string, data: EventDTO) {
  const updatedData = await EventModel.findOneAndUpdate(
    { _id: eventId },
    data,
    {
      new: true,
    },
  );

  return updatedData;
}
