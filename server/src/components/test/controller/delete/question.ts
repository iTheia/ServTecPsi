import { Request, Response } from "express";
import { Question } from "../../model";
import { errorResponse } from "../../../util";

export async function deleteQuestion(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Question.createQueryBuilder("question")
      .where("question.id = :id", { id })
      .delete()
      .execute();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
