import configs from "configs";
import { Express } from "express";

import v1 from "./v1";

export default function initRouters(app: Express) {
  app.get("/", (_, res) => {
    res.send("PONG");
  });

  app.get("/configs", (_, res) => {
    res.json(configs);
  });

  app.use("/v1", v1);
}
