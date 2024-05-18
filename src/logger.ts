import winston, { format } from "winston";

const { combine, timestamp, label, json } = format;

export const options = {
  format: combine(
    label({ label: "booking-service" }),
    timestamp({ format: "YYYY-MM-D:HH-mm-ss" }),
    json(),
  ),
  transports: [new winston.transports.Console()],
};

export const logger = winston.createLogger(options);
