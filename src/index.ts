import configs from "configs";
import cors from "cors";
import express from "express";
import expressWinston from "express-winston";
import helmet from "helmet";
import { logger, options } from "logger";
import v1 from "routers/v1";

const app = express();

app.use(helmet());
app.use(cors());
app.use(expressWinston.logger(options));

app.get("/ping", (_, res) => {
  res.send("PONG");
});
app.use("/v1", v1);

app.listen(configs.port, () => {
  logger.info(`App listen at port ${configs.port}`);
});
