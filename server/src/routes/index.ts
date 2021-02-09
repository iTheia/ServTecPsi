import { Router } from "express";
import * as components from "../components";

export const router = Router();

router.use("/auth", components.authRoutes);
router.use("/authors", components.authorRoutes);
router.use("/dailyPhrases", components.dailyPhraseRoutes);
router.use("/tests", components.testRoutes);
router.use("/posts", components.postRoutes);
router.use("/files", components.fileRoutes);
/* router.use("/users", components.userRoutes) */
