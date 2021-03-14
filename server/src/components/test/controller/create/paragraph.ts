import { Request, Response } from "express";
import { errorResponse } from "../../../util";
import { TestParagraph } from "../../model";
import { createParagraph } from "../../validation";

export async function createTestParagraph(req: Request, res: Response) {
  try {
    const body = createParagraph.validateSync(req.body);
    await TestParagraph.create(body).save();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
