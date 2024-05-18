import { Router } from "express";

const v1 = Router();

v1.use("/", (_, res) => {
  res.send("v1");
});

export default v1;
