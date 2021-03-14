import { Request, Response } from "express";
import { Question } from "../../model";
import { errorResponse } from "../../../util";

export async function getQuestions(req: Request, res: Response) {
  try {
    const { test_id } = req.params;
    await Question.createQueryBuilder("question")
      .where("question.test_id = :test_id", { test_id })
      .getMany();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
