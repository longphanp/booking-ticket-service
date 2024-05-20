import PaymentModel from "models/Payment";

export default async function getPayment(paymentId: string) {
  const data = await PaymentModel.findOne({ _id: paymentId }).populate([
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
