import { Router } from "express";
import { asyncHandler } from "../../util/asyncHandler";
import { workerGroupController } from "../../controller/worker-group";

const router = Router();

router
  .get("/", asyncHandler(workerGroupController.get))
  .post("/add", asyncHandler(workerGroupController.add))
  .delete("/remove", asyncHandler(workerGroupController.delete));

export default router;
