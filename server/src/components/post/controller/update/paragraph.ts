import { Request, Response } from "express";
import { PostParagraph } from "../../model";
import { errorResponse } from "../../../util";

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
