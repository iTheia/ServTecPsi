import { Router } from "express";
import { canUse } from "../../util";
import { authorizationMiddleware } from "../../../middlewares";
import {
  createResult,
  getResult,
  updateResult,
  deleteResult,
} from "../controller";

export const resultRoutes = Router({ mergeParams: true });

resultRoutes
  .route("/")
  .post(authorizationMiddleware, canUse("admin"), createResult)
  .get(getResult);

resultRoutes
  .route("/:id")
  .put(authorizationMiddleware, canUse("admin"), updateResult)
  .delete(authorizationMiddleware, canUse("admin"), deleteResult);
