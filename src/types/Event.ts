import Model from "./Model";

export interface Event extends Model {
  name: string;
  description?: string;
  startAt: string;
  endAt: string;
}
