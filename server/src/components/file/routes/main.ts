import { Router } from "express";
import { authorizationMiddleware, upload } from "../../../middlewares";
import { createFile, deleteFile } from "../controller";

export const fileRoutes = Router();

fileRoutes.use(authorizationMiddleware, upload.single("file"));

fileRoutes.route("/").post(createFile);

fileRoutes.route("/:id").delete(deleteFile);
