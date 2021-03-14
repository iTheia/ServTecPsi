import { Router } from "express";
import { authorizationMiddleware } from "../../../middlewares";
import { canUse } from "../../util";
import {
  createTestParagraph,
  deleteTestParagraph,
  getTestParagraph,
  updateTestParagraph,
} from "../controller";

export const testPragraphRoutes = Router({ mergeParams: true });

testPragraphRoutes
  .route("/")
  .get(getTestParagraph)
  .post(authorizationMiddleware, canUse("admin"), createTestParagraph);

testPragraphRoutes
  .route("/:id")
  .delete(authorizationMiddleware, canUse("admin"), deleteTestParagraph)
  .put(authorizationMiddleware, canUse("admin"), updateTestParagraph);
