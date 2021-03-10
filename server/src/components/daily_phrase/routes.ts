import { Router } from "express";
import { authorizationMiddleware } from "../../middlewares";
import { canUse } from "../util";
import {
  createDaylyPhrase,
  deleteDaylyPhrase,
  getDaylyPhrase,
  updateDaylyPhrase,
} from "./controller";
export const dailyPhraseRoutes = Router();

dailyPhraseRoutes
  .route("/")
  .post(authorizationMiddleware, canUse("admin"), createDaylyPhrase)
  .get(getDaylyPhrase);

dailyPhraseRoutes
  .route("/:id")
  .delete(authorizationMiddleware, canUse("admin"), deleteDaylyPhrase)
  .put(authorizationMiddleware, canUse("admin"), updateDaylyPhrase);
