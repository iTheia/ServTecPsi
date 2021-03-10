import { Router } from "express";
import { createGoogleUser } from "./controller";
export const googleRoutes = Router();

googleRoutes.post("/login", createGoogleUser);
