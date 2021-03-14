import { Request, Response } from "express";
import { TestParagraph } from "../../model";
import { errorResponse } from "../../../util";

export async function deleteTestParagraph(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await TestParagraph.createQueryBuilder("paragraph")
      .where("paragraph.id = :id", { id })
      .delete()
      .execute();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
