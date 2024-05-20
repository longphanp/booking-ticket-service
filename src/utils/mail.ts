import configs from "configs";
import { logger } from "logger";
import nodemailer from "nodemailer";

export function getTransporter() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: configs.gmail.username,
      pass: configs.gmail.password,
    },
  });

  return transporter;
}

export function sendTo(email: { to: string; subject: string; text: string }) {
  const transporter = getTransporter();
  transporter.sendMail(
    {
      to: email.to,
      subject: email.subject,
      text: email.text,
    },
    (err, info) => {
      if (err) {
        logger.error(`Send email failed with error ${err}`);
        return;
      }

      logger.info(`Email sent to ${email.to} with info ${info.response}`);
    },
  );
}
