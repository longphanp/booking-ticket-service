import amqp from "amqplib/callback_api";
import configs from "configs";
import { logger } from "logger";

let conn: amqp.Connection;

export async function connectRabbitMq(): Promise<amqp.Connection> {
  const { protocol, host, port, username, password } = configs.rabbitMq;
  return new Promise(res => {
    amqp.connect(
      {
        protocol: protocol,
        hostname: host,
        port: port,
        username: username,
        password: password,
        vhost: "rnnyzrmv",
      },
      (err, connection) => {
        if (err) {
          logger.error(`RabbitMQ connection error: ${err}`);
          return;
        }

        logger.info("Connected to RabbitMQ!");
        conn = connection;
        res(connection);
      },
    );
  });
}

export default async function getRabbitConnection() {
  if (!conn) {
    conn = await connectRabbitMq();
  }

  return conn;
}
