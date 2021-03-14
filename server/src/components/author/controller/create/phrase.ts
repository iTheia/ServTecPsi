import { Request, Response } from "express";
import { errorResponse } from "../../../util";
import { DailyPhrase } from "../../model";

export async function createDaylyPhrase(req: Request, res: Response) {
  try {
    const { phrase, author_id, day } = req.body;
    await DailyPhrase.create({ phrase, date: day, author_id }).save();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
