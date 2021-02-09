import { Router } from "express";
import { authorizationMiddleware } from "../../middlewares";
import { questionRoutes } from "../question/routes";
import { resultRoutes } from "../result";
import { testPragraphRoutes } from "../test_paragraph";
import { paginate } from "../util";
import * as controller from "./controller";
import { Test } from "./model";

export const testRoutes = Router();

testRoutes
    .route("/")
    .get(
        paginate(Test, [["data.paragraphs", "paragraphs"]]),
        controller.getTests
    )
    .post(authorizationMiddleware, controller.createTest);
testRoutes
    .route("/:id")
    .delete(authorizationMiddleware, controller.deleteTest)
    .put(authorizationMiddleware, controller.updateTest)
    .get(controller.getTest);

testRoutes.use("/questions/:test_id", questionRoutes);
testRoutes.use("/paragraphs/:test_id", testPragraphRoutes);
testRoutes.use("/results/:test_id", resultRoutes);
