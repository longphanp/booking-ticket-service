import PaymentModel from "models/Payment";

export default async function getPayments(userId: string) {
  const data = await PaymentModel.find({ user: userId }).populate([
    "event",
    {
      path: "seats",
      populate: {
        path: "area",
      },
    },
  ]);
  return data;
}
