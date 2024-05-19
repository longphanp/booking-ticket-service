import { Request, Response } from "express";
import login from "services/auth/login";

export default async function loginController(req: Request, res: Response) {
  const token = await login(req.body);

  res.json({ data: token });
}
