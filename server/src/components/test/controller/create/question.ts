import { Request, Response } from "express";
import { Question } from "../../model";
import { errorResponse } from "../../../util";

export async function createQuestion(req: Request, res: Response) {
  try {
    const { text, value } = req.body;
    const { test_id } = req.params;
    await Question.create({
      text,
      value,
      test_id: parseInt(test_id),
    }).save();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
