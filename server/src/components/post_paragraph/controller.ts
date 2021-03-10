import { Request, Response } from "express";
import { errorResponse } from "../util";
import { PostParagraph } from "./model";

export async function updatePostParagraph(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const body = req.body;
    const paragraph = await PostParagraph.findOneOrFail(id);
    await PostParagraph.save({ ...paragraph, ...body });
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}

export async function deletePostParagraph(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await PostParagraph.createQueryBuilder("paragraph")
      .where("paragraph.id = :id", { id })
      .delete()
      .execute();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
