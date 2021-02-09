import { Router } from "express";
import {
    authorRoutes,
    authRoutes,
    dailyPhraseRoutes,
    fileRoutes,
    postRoutes,
    testRoutes,
} from "../components";

export const router = Router();

router.use("/auth", authRoutes);
router.use("/authors", authorRoutes);
router.use("/dailyPhrases", dailyPhraseRoutes);
router.use("/tests", testRoutes);
router.use("/posts", postRoutes);
router.use("/files", fileRoutes);
/* router.use("/users", userRoutes) */
