import { Request, Response } from "express";
import { DailyPhrase } from "../../model";
import { errorResponse } from "../../../util";

export async function deleteDaylyPhrase(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await DailyPhrase.createQueryBuilder("phrase")
      .where("phrase.id = :id", { id })
      .delete()
      .execute();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
