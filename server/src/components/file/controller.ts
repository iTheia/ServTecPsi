import { Response } from "express";
import { config } from "../../config";
import { IRequest } from "../types";
import { errorResponse } from "../util";
import { File } from "./model";

export async function createFile(req: IRequest, res: Response) {
    try {
        const { filename, mimetype, path, size } = req.file;
        const file = await File.create({
            name: filename,
            size,
            type: mimetype,
            path: config.host + path.replace("public", "").replace(/\\/g, "/"),
        }).save();
        res.send({
            id: file.id,
            path: file.path,
        });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function deleteFile(req: IRequest, res: Response) {
    try {
        const { id } = req.body;
        await File.createQueryBuilder("file")
            .where("file.id = :id", { id })
            .delete()
            .execute();
        res.send({ message: "File deleted" });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
