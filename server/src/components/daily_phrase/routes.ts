import { Router } from "express";
import {
    createDaylyPhrase,
    deleteDaylyPhrase,
    updateDaylyPhrase,
} from "./controller";
export const dailyPhraseRoutes = Router();

dailyPhraseRoutes.route("/").post(createDaylyPhrase);
dailyPhraseRoutes
    .route("/:id")
    .delete(deleteDaylyPhrase)
    .put(updateDaylyPhrase);
