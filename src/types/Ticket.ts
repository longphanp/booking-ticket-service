import Model from "./Model";

export default interface Ticket extends Model {
  event: string;
  area: string;
  price: number;
  cancellable: boolean;
}
