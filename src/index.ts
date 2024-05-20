import configs from "configs";
import express from "express";
import { logger } from "logger";
import initMiddlewares from "middlewares";
import errorHandler from "middlewares/errorHandler";
import initQueueConsumers from "queues";
import initResources from "resources";
import initRouters from "routers";

const app = express();

initMiddlewares(app);
initRouters(app);
app.use(errorHandler);

app.listen(configs.port, async () => {
  await initResources();
  initQueueConsumers();
  logger.info(`App listen at port ${configs.port}`);
});
