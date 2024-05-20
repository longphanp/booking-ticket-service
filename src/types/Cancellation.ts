import Model from "./Model";

export default interface Area extends Model {
  booking: string;
  reason?: string;
}
