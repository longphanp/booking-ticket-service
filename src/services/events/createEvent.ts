import { EventDTO } from "dto/EventDTO";
import EventModel from "models/Event";

export default async function createEvent(event: EventDTO) {
  const data = await EventModel.create(event);
  return data;
}
