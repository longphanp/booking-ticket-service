import Model from "./Model";

export default interface Event extends Model {
  name: string;
  description?: string;
  startAt: string;
  endAt: string;
}
