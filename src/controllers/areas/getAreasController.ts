import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import getAreas from "services/areas/getAreas";

async function getAreasController(_: Request, res: Response) {
  const data = await getAreas();
  res.json({ data });
}

export default withTryCatch(getAreasController);
