import { Request, Response } from "express";
import { errorResponse } from "../../../util";
import { DailyPhrase } from "../../model";
import { standarDate } from "../../util";

export async function getDaylyPhrase(req: Request, res: Response) {
  try {
    let phrase = await DailyPhrase.createQueryBuilder("phrase")
      .where("phrase.date = :date", { date: standarDate() })
      .getOne();
    if (!phrase) {
      phrase = await DailyPhrase.createQueryBuilder("phrase")
        .orderBy("RANDOM()")
        .getOne();
    }
    res.send(phrase);
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
