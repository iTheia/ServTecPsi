import { Router } from "express";
import { authorizationMiddleware } from "../../middlewares";
import {
    createQuestion,
    deleteQuestion,
    getQuestion,
    getQuestions,
    updateQuestion,
} from "./controller";

export const questionRoutes = Router({ mergeParams: true });

questionRoutes.route("/").post(createQuestion).get(getQuestions);
questionRoutes
    .route("/:id")
    .delete(authorizationMiddleware, deleteQuestion)
    .put(authorizationMiddleware, updateQuestion)
    .get(getQuestion);
