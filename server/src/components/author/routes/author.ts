import { Router } from "express";
import { canUse } from "../../";
import {
  authorizationMiddleware,
  paginate,
  sendPaginatedData,
} from "../../../middlewares";
import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  updateAuthor,
} from "../controller";
import { Author } from "../model";

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
