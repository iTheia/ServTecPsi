import { Router } from "express";
import { canUse } from "../../util";
import { authorizationMiddleware } from "../../../middlewares";
import {
  createQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion,
} from "../controller";

export const questionRoutes = Router({ mergeParams: true });

questionRoutes
  .route("/")
  .post(authorizationMiddleware, canUse("admin"), createQuestion)
  .get(getQuestions);
questionRoutes
  .route("/:id")
  .delete(authorizationMiddleware, canUse("admin"), deleteQuestion)
  .put(authorizationMiddleware, canUse("admin"), updateQuestion);
