import { Request, Response } from "express";
import { Question } from "../../model";
import { errorResponse } from "../../../util";

export async function updateQuestion(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const body = req.body;
    const question = await Question.findOneOrFail(id);
    await Question.save({
      ...question,
      ...body,
    });
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
