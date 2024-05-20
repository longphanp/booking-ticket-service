import Model from "./Model";

export const BOOKING_STATUS = ["ACTIVE", "CANCELED"] as const;

export default interface Booking extends Model {
  user: string;
  ticket: string;
  seat: string;
  status: (typeof BOOKING_STATUS)[number];
}
