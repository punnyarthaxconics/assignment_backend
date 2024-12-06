import prisma from "..";

export const getWorkerGroupDB = async () => {
  try {
    const UserGroupList = await prisma.workergroup.findMany({});

    return UserGroupList;
  } catch (error) {
    throw error;
  }
};
