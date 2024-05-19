import { Express } from "express";

import v1 from "./v1";

export default function initRouters(app: Express) {
  app.get("/ping", (_, res) => {
    res.send("PONG");
  });

  app.use("/v1", v1);
}
