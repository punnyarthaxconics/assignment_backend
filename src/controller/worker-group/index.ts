import { Request, Response } from "express";
import {
  workergroupAddSchema,
  workerGroupIdSchema,
} from "../../validator/worker-group";
import { workerGroupAddDB } from "../../db/workerGroup/add";
import { STATUSCODES } from "../../config";
import { workerGroupDelDB } from "../../db/workerGroup/delete";

export const workerGroupController = {
  add: async (req: Request, res: Response) => {
    const workerGroupInfo = workergroupAddSchema.parse(req.body);

    const addUser = await workerGroupAddDB(workerGroupInfo);

    // If worker group add fails
    if (!addUser)
      res
        .status(STATUSCODES.serverErrorCode)
        .json({ error: "Worker group add failed" });

    // If added successfully
    res.json("Worker group added successfully");
  },
  delete: async (req: Request, res: Response) => {
    const workerGroupId = workerGroupIdSchema.parse(req.body.id);

    const addUser = await workerGroupDelDB(workerGroupId);

    // If worker group delete fails
    if (!addUser)
      res
        .status(STATUSCODES.serverErrorCode)
        .json({ error: "Worker group add failed" });

    // If delete successful
    res.json("Worker group deleted successfully");
  },
};
