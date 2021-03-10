import { Router } from "express";
import * as controller from "./controller";
import { postParagraphRoutes } from "../post_paragraph/routes";
import {
  authorizationMiddleware,
  trending,
  paginate,
  sendPaginatedData,
} from "../../middlewares";
import { canUse } from "../util";
import { Post } from "./model";

export const postRoutes = Router();

postRoutes.use("/paragraphs/:post_id", postParagraphRoutes);

postRoutes
  .route("/")
  .get(paginate(Post, [["data.paragraphs", "paragraphs"]]), sendPaginatedData)
  .post(authorizationMiddleware, canUse("admin"), controller.createPost);

postRoutes.get("/trend", trending(Post, 8));

postRoutes
  .route("/:id")
  .delete(authorizationMiddleware, canUse("admin"), controller.deletePost)
  .put(authorizationMiddleware, canUse("admin"), controller.updatePost)
  .get(controller.getPost);
