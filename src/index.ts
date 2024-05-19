import configs from "configs";
import express from "express";
import { logger } from "logger";
import initMiddlewares from "middlewares";
import initRouters from "routers";

const app = express();

initMiddlewares(app);
initRouters(app);

app.listen(configs.port, async () => {
  logger.info(`App listen at port ${configs.port}`);
});
