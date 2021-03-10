import { Router } from "express";
import { closeSession, getCurrentSession } from "./controller";
import { googleRoutes } from "./google";

export const authRoutes = Router();

//authRoutes.post("/login", loginController);
//authRoutes.post("/signup", registerController);
authRoutes.get("/close", closeSession);
authRoutes.get("/current", getCurrentSession);

authRoutes.use("/google", googleRoutes);
