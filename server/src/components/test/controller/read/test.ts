import { Request, Response } from "express";
import { Test } from "../../model";
import { errorResponse } from "../../../util";

export async function getTest(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const test = await Test.createQueryBuilder("test")
      .where("test.id = :id", { id })
      .leftJoinAndSelect("test.questions", "questions")
      .leftJoinAndSelect("test.paragraphs", "paragraphs")
      .getOne();
    res.send(test);
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
