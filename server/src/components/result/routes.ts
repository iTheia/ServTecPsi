import { Router } from "express";
import { authorizationMiddleware } from "../../middlewares";
import * as controller from "./controller";

export const resultRoutes = Router({ mergeParams: true });

resultRoutes
    .route("/")
    .post(authorizationMiddleware, controller.createResult)
    .get(controller.getResult);

resultRoutes
    .route("/:id")
    .put(authorizationMiddleware, controller.updateResult)
    .delete(authorizationMiddleware, controller.deleteResult);
