import { Request, Response } from "express";
import withTryCatch from "middlewares/withTryCatch";
import login from "services/auth/login";

async function loginController(req: Request, res: Response) {
  const token = await login(req.body);

  res.json({ data: token });
}

export default withTryCatch(loginController);
