import { Router } from "express";
import { authorizationMiddleware } from "../../middlewares";
import * as controller from "./controller";

export const postParagraphRoutes = Router({ mergeParams: true });

postParagraphRoutes
    .route("/")
    .get(controller.getPostParagraphs)
    .post(authorizationMiddleware, controller.createPostParagraph);

postParagraphRoutes
    .route("/:id")
    .delete(authorizationMiddleware, controller.deletePostParagraph)
    .put(authorizationMiddleware, controller.updatePostParagraph)
    .get(controller.getPostParagraph);
