import { Router } from "express";
import { authorizationMiddleware } from "../../middlewares";
import { paginate, sendPaginatedData } from "../../middlewares/pagination";
import { canUse } from "../util/permission/middleware";
import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  updateAuthor,
} from "./controller";
import { Author } from "./model";

export const authorRoutes = Router();

authorRoutes.use(authorizationMiddleware, canUse("admin"));

authorRoutes
  .route("/")
  .get(paginate(Author), sendPaginatedData)
  .post(createAuthor);

authorRoutes
  .route("/:id")
  .get(getAuthor)
  .delete(deleteAuthor)
  .put(updateAuthor);
