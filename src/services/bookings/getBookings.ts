import BookingModel from "models/Booking";

export default async function getBookings(userId: string) {
  const data = await BookingModel.find({ user: userId }).populate([
    { path: "ticket", populate: ["event", "area"] },
    "seat",
  ]);

  return data;
}
