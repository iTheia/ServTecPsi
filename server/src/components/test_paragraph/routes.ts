import { Router } from "express";
import { authorizationMiddleware } from "../../middlewares";
import * as controller from "./controller";

export const testPragraphRoutes = Router({ mergeParams: true });

testPragraphRoutes
    .route("/")
    .get(controller.getTestParagraph)
    .post(authorizationMiddleware, controller.createTestParagraph);
testPragraphRoutes
    .route("/:id")
    .delete(authorizationMiddleware, controller.deleteTestParagraph)
    .put(authorizationMiddleware, controller.updateTestParagraph);
