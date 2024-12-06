import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import path from "path";
if (process.env.NODE_ENV !== "PRODUCTION") {
  config({ path: path.resolve(__dirname, "../.env") });
}

import { env, STATUSCODES } from "./config";

import workerGroupRouter from "./route/worker-group";

const app = express();

app.use(express.json());

app.use("/workergroup", workerGroupRouter);

// Global Error Catch
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) console.log(err.message);
  res
    .status(STATUSCODES.serverErrorCode)
    .json({ error: "Something Went Wrong!" });
});

app.listen(env.PORT, () => console.log(`Listening on port ${env.PORT}`));
