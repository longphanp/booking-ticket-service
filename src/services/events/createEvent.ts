import EventModel from "models/Event";
import { EventDTO } from "types/EventDTO";

export default async function createEvent(event: EventDTO) {
  const data = await EventModel.create(event);
  return data;
}
