import { Response } from "express";
import { config } from "../../../config";
import { errorResponse } from "../../util";
import { IRequest } from "../../types";
import { File } from "../model";

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
