import { Router } from "express";
import * as controller from "./controller";
import { postParagraphRoutes } from "../post_paragraph/routes";
import { authorizationMiddleware } from "../../middlewares";
import { paginate } from "../util";
import { Post } from "./model";

export const postRoutes = Router();

postRoutes.use("/paragraphs/:post_id", postParagraphRoutes);

postRoutes
    .route("/")
    .get(
        paginate(Post, [["data.paragraphs", "paragraphs"]]),
        controller.getPosts
    )
    .post(authorizationMiddleware, controller.createPost);

postRoutes
    .route("/:id")
    .delete(authorizationMiddleware, controller.deletePost)
    .put(authorizationMiddleware, controller.updatePost)
    .get(controller.getPost);
