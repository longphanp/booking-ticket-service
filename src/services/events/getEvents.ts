import EventModel from "models/Event";

export default async function getEvents() {
  const events = await EventModel.find({});
  return events;
}
