import prisma from "..";
import { workergroupAddType } from "../../validator/worker-group";

export const workerGroupEditDB = async (
  wokerGroupInfo: workergroupAddType,
  workerGroupId: string
) => {
  try {
    const editUserGroup = await prisma.workergroup.update({
      where: { id: workerGroupId },
      data: wokerGroupInfo,
    });

    return editUserGroup;
  } catch (error) {
    throw error;
  }
};
