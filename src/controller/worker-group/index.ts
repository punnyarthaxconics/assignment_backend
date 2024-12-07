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

    const addWorkerGroup = await workerGroupAddDB(workerGroupInfo);

    // If worker group add fails
    if (!addWorkerGroup)
      res
        .status(STATUSCODES.serverErrorCode)
        .json({ error: "Worker group add failed" });

    // If added successfully
    res.json({
      message: "Worker group added successfully",
      data: addWorkerGroup,
    });
  },
  delete: async (req: Request, res: Response) => {
    const workerGroupId = workerGroupIdSchema.parse(req.params.id);

    const delWorkerGroup = await workerGroupDelDB(workerGroupId);

    // If worker group delete fails
    if (!delWorkerGroup)
      res
        .status(STATUSCODES.serverErrorCode)
        .json({ error: "Worker group delete failed" });

    // If delete successful
    res.json({ message: "Worker group deleted successfully" });
  },
};
