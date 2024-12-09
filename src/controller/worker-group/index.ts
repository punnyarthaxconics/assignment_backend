import { Request, Response } from "express";
import {
  workergroupAddSchema,
  workerGroupIdSchema,
} from "../../validator/worker-group";
import { workerGroupAddDB } from "../../db/workerGroup/add";
import { STATUSCODES } from "../../config";
import { workerGroupDelDB } from "../../db/workerGroup/delete";
import { getWorkerGroupDB } from "../../db/workerGroup/get";
import { workerGroupEditDB } from "../../db/workerGroup/edit";

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

  edit: async (req: Request, res: Response) => {
    const workerGroupId = workerGroupIdSchema.parse(req.params.id);

    const workerGroupInfo = workergroupAddSchema.parse(req.body);

    const editWorkerGroup = await workerGroupEditDB(
      workerGroupInfo,
      workerGroupId
    );

    // If worker group edit fails
    if (!editWorkerGroup)
      res
        .status(STATUSCODES.serverErrorCode)
        .json({ error: "Worker group edit failed" });

    // If edited successfully
    res.json({
      message: "Worker group edited successfully",
      data: editWorkerGroup,
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
