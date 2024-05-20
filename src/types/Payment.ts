import Model from "./Model";

export const PAYMENT_STATUS = ["SUCCESS", "ERROR", "PENDING"] as const;

export default interface Payment extends Model {
  user: string;
  event: string;
  seats: string[];
  totals: number;
  status: (typeof PAYMENT_STATUS)[number];
}
