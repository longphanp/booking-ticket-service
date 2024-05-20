import EventModel from "models/Event";

export default async function deleteEvent(eventId: string) {
  const data = await EventModel.findOneAndDelete({ _id: eventId });
  return data;
}
