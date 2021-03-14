import { Router } from "express";
import { authorizationMiddleware } from "../../../middlewares";
import { deletePostParagraph, updatePostParagraph } from "../controller";

export const postParagraphRoutes = Router({ mergeParams: true });

postParagraphRoutes
  .route("/:id")
  .delete(authorizationMiddleware, deletePostParagraph)
  .put(authorizationMiddleware, updatePostParagraph);
