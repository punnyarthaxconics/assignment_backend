/*
  Warnings:

  - A unique constraint covering the columns `[groupId]` on the table `workergroup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "workergroup_groupId_key" ON "workergroup"("groupId");
