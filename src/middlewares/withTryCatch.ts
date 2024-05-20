import { NextFunction, Request, Response } from "express";

export default function withTryCatch(
  controller: (arg0: Request, arg1: Response, arg2: NextFunction) => void,
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
