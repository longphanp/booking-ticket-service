import HttpError from "exceptions/HttpError";
import { NextFunction, Request, Response } from "express";
import { logger } from "logger";

export default function errorHandler(
  err: HttpError,
  _: Request,
  res: Response,
  next: NextFunction,
) {
  logger.error(err.errors || err.message);

  res.status(500).json({
    error: err.errors || err.message,
  });

  next();
}
