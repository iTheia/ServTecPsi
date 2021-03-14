import { Request, Response } from "express";
import { PostParagraph } from "../../model";
import { errorResponse } from "../../../util";

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
