import { Request, Response } from "express";
import { errorResponse } from "../../../util";
import { DailyPhrase } from "../../model";

export async function updateDaylyPhrase(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const body = req.body;
    const phrase = await DailyPhrase.findOne(id);
    await DailyPhrase.save({ ...phrase, ...body });
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
