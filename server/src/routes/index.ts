import { Router } from "express";
import { authorRoutes, authRoutes } from "../components";

export const router = Router();

router.use("/auth", authRoutes);
router.use("/authors", authorRoutes);
