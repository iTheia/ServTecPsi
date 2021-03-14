import { Response } from "express";
import { errorResponse } from "../../util";
import { IRequest } from "../../types";
import { File } from "../model";

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
