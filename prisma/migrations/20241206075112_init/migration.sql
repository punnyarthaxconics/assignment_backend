-- CreateTable
CREATE TABLE "workergroup" (
    "id" TEXT NOT NULL,
    "groupName" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "workergroup_id_key" ON "workergroup"("id");
