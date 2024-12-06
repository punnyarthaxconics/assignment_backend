import { Request, Response } from "express";
import { formatZodError } from "../util/zodFormatter";
import { ZodError } from "zod";

export const asyncHandler = (
  func: (req: Request, res: Response) => Promise<any>
) => {
  return (req: Request, res: Response) => {
    func(req, res).catch((error: Error | ZodError) => {
      if (error instanceof ZodError)
        return res.status(400).json({ error: formatZodError(error) });
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(500).json({ error: "Something went wrong" });
      }
    });
  };
};
