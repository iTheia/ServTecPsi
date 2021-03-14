import { Router } from "express";
import { Test } from "../model";
import { canUse } from "../../util";
import {
  paginate,
  sendPaginatedData,
  authorizationMiddleware,
  trending,
} from "../../../middlewares";
import { createTest, deleteTest, updateTest, getTest } from "../controller";
import { testPragraphRoutes } from "./paragraph";
import { questionRoutes } from "./question";
import { resultRoutes } from "./result";

export const testRoutes = Router();

testRoutes
  .route("/")
  .get(paginate(Test, [["data.image", "image"]]), sendPaginatedData)
  .post(authorizationMiddleware, canUse("admin"), createTest);

testRoutes.get("/trend", trending(Test, 8));

testRoutes
  .route("/:id")
  .delete(authorizationMiddleware, canUse("admin"), deleteTest)
  .put(authorizationMiddleware, canUse("admin"), updateTest)
  .get(getTest);

testRoutes.use("/questions/:test_id", questionRoutes);
testRoutes.use("/paragraphs/:test_id", testPragraphRoutes);
testRoutes.use("/results/:test_id", resultRoutes);
