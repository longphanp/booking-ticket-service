import { PAYMENT_EXPIRED } from "constants/payment";
import { logger } from "logger";
import PaymentModel from "models/Payment";
import getMongoDb from "resources/mongodb";
import getRabbitConnection from "resources/rabbitmq";
import releaseSeat from "services/seats/releaseSeat";

const queue = "paymentExpire";

export async function sendPaymentExpireEvent(paymentId: string) {
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

export async function initPaymentExpireConsumer() {
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

      setTimeout(async () => {
        const db = await getMongoDb();
        const session = await db.startSession();

        try {
          const res = await session.withTransaction(async () => {});
          const paymentId = message?.content?.toString();
          const payment = await PaymentModel.findOne({
            _id: paymentId,
            status: "PENDING",
          }).session(session);

          if (!payment) return;
          await payment.updateOne({ status: "ERROR" }, { session });
          releaseSeat({ event: payment.event, seats: payment.seats });
          return res;
        } catch (e) {
          await session.endSession();
          logger.error(`Error: ${e}`);
        }
      }, PAYMENT_EXPIRED);
    });
  });
}
