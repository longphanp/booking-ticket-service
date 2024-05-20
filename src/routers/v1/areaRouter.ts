import getAreasController from "controllers/areas/getAreasController";
import { Router } from "express";

const areaRouter = Router();

areaRouter.get("/", getAreasController);

export default areaRouter;
