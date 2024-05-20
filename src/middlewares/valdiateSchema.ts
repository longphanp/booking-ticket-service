import { NextFunction, Request, Response } from "express";
import { ZodError, z } from "zod";

export default function validateSchema(
  prop: "body" | "query" | "params",
  schema: z.AnyZodObject,
) {
  return function (req: Request, res: Response, next: NextFunction) {
    const validateObject = req[prop];
    try {
      schema.parse(validateObject);
      next();
    } catch (e) {
      if (e instanceof ZodError) {
        res.status(400).json({
          errors: e.errors,
        });
        return;
      }

      next(e);
    }
  };
}
