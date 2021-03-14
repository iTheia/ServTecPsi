import { Router } from "express";
import { postParagraphRoutes } from "./paragraph";
import {
  authorizationMiddleware,
  trending,
  paginate,
  sendPaginatedData,
} from "../../../middlewares";
import { canUse } from "../../util";
import { Post } from "../model";
import { createPost, deletePost, getPost, updatePost } from "../controller";

export const postRoutes = Router();

postRoutes.use("/paragraphs/:post_id", postParagraphRoutes);

postRoutes
  .route("/")
  .get(paginate(Post, [["data.image", "image"]]), sendPaginatedData)
  .post(authorizationMiddleware, canUse("admin"), createPost);

postRoutes.get("/trend", trending(Post, 8));

postRoutes
  .route("/:id")
  .delete(authorizationMiddleware, canUse("admin"), deletePost)
  .put(authorizationMiddleware, canUse("admin"), updatePost)
  .get(getPost);
