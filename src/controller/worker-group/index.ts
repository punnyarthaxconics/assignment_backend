import { Request, Response } from "express";
import {
  workergroupAddSchema,
  workerGroupIdSchema,
} from "../../validator/worker-group";
import { workerGroupAddDB } from "../../db/workerGroup/add";
import { STATUSCODES } from "../../config";
import { workerGroupDelDB } from "../../db/workerGroup/delete";
import { getWorkerGroupDB } from "../../db/workerGroup/get";

export const workerGroupController = {
  get: async (req: Request, res: Response) => {
    const getWorkerList = await getWorkerGroupDB();

    // If not worker list
    if (!getWorkerList)
      res
        .status(STATUSCODES.serverErrorCode)
        .json({ error: "Could not fetch group info." });

    // On successfull db call
    res.json(getWorkerList);
  },
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
