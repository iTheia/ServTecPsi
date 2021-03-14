import { Request, Response } from "express";
import { TestParagraph } from "../../model";
import { errorResponse } from "../../../util";

export async function getTestParagraph(req: Request, res: Response) {
  try {
    const { test_id } = req.params;
    const paragraph = await TestParagraph.createQueryBuilder("paragraph")
      .where("paragraph.test_id = :test_id", { test_id })
      .getMany();
    res.send(paragraph);
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
