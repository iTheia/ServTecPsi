import { Router } from "express";
import { paginate } from "../util/pagination";
import { getAuthors } from "./controller";
import { Author } from "./model";

export const authorRoutes = Router();

authorRoutes.route("/test").get(paginate(Author), getAuthors);
