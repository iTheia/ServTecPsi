import { Router } from "express";
import { getAuthors } from "./controller";
import { Author } from "./model";

export const authorRoutes = Router();

authorRoutes.get("/", getAuthors);
