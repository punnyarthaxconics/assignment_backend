import prisma from "..";

export const workerGroupDelDB = async (wokerGroupInfoId: string) => {
  try {
    const deletedWorkerGroup = await prisma.workergroup.delete({
      where: {
        id: wokerGroupInfoId,
      },
    });

    return deletedWorkerGroup;
  } catch (error) {
    throw error;
  }
};
