import { NextFunction, Request, Response } from "express";
import { logger } from "logger";

export default function errorHandler(
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction,
) {
  logger.error(err.message || err);

  res.status(500).json({
    error: err.message || err,
  });

  next();
}
