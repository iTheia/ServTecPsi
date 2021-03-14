import { Request, Response } from "express";
import { TestParagraph } from "../../model";
import { errorResponse } from "../../../util";

export async function updateTestParagraph(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const body = req.body;
    const paragraph = await TestParagraph.findOne(id);
    await TestParagraph.save({ ...paragraph, ...body });
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
