import { logger } from "logger";
import PaymentModel from "models/Payment";
import getRabbitConnection from "resources/rabbitmq";
import sendEmail from "services/notification/sendEmail";

const queue = "paymentConfirm";

export async function sendPaymentNotificationEvent(paymentId: string) {
  const connection = await getRabbitConnection();
  connection.createChannel((err, channel) => {
    if (err) {
      logger.error(`Create channel for queue: ${queue} failed`);
    }

    channel.assertQueue(queue, {
      durable: false,
      autoDelete: true,
    });

    channel.sendToQueue(queue, Buffer.from(paymentId));
    logger.info(`Queue: ${queue} sent with data: ${paymentId}`);
  });
}

export async function initPaymentNotificationConsumer() {
  const connection = await getRabbitConnection();
  connection.createChannel((err, channel) => {
    if (err) {
      logger.error(`Create channel for queue: ${queue} failed`);
    }

    channel.assertQueue(queue, {
      durable: false,
      autoDelete: true,
    });

    logger.info(`Queue: init consumer for ${queue}`);

    channel.consume(queue, async message => {
      logger.info(
        `Queue: ${queue} consume with data: ${message?.content.toString()}`,
      );

      try {
        const paymentId = message?.content?.toString();
        const payment = await PaymentModel.findOne({ _id: paymentId });
        if (!payment) return;

        sendEmail(payment?.user, {
          subject: `Ticket Nami Payment: ${paymentId}`,
          text: `Event: ${payment.event} | Totals: ${payment.totals}`,
        });
      } catch (e) {
        logger.error(`Error: ${e}`);
      }
    });
  });
}
