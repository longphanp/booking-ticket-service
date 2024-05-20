import cors from "cors";
import express, { Express } from "express";
import expressWinston from "express-winston";
import helmet from "helmet";
import { options } from "logger";

export default function initMiddlewares(app: Express) {
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    }),
  );
  app.use(expressWinston.logger(options));
}
