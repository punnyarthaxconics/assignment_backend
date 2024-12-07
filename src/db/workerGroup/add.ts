import prisma from "..";
import { workergroupAddType } from "../../validator/worker-group";

export const workerGroupAddDB = async (wokerGroupInfo: workergroupAddType) => {
  try {
    const addUserGroup = await prisma.workergroup.create({
      data: wokerGroupInfo,
    });

    return addUserGroup;
  } catch (error) {
    throw error;
  }
};
