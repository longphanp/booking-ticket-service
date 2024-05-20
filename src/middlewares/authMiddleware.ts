import configs from "configs";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export default function authMiddlware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const bearerHeader = req.header("Authorization");

  if (!bearerHeader || !bearerHeader.includes("Bearer")) {
    res.status(403).json("Invalid token");
    return;
  }

  try {
    const token = bearerHeader.split(" ")[1];
    const payload = jwt.verify(
      token,
      configs.google.clientSecret,
    ) as JwtPayload;

    req.email = payload.email;
    req.userId = payload._id;
    req.isAdmin = payload.isAdmin;

    next();
  } catch (err) {
    res.status(400).json(err);
  }
}
