import UserModel from "models/User";
import { sendTo } from "utils/mail";

export default async function sendEmail(
  userId: string,
  data: {
    subject: string;
    text: string;
  },
) {
  const user = await UserModel.findOne({ _id: userId });

  if (!user) return;
  sendTo({
    to: user?.email,
    subject: data.subject,
    text: data.text,
  });
}
