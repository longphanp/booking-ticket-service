import { Router } from "express";

import authRouter from "./authRouter";
import eventRouter from "./eventRouter";

const v1 = Router();

v1.use("/events", eventRouter);
v1.use("/auth", authRouter);

export default v1;
