import { Request, Response } from "express";
import { errorResponse } from "../util";
import { DailyPhrase } from "./model";

export async function getDaylyPhrase(req: Request, res: Response) {
    try {
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
export async function createDaylyPhrase(req: Request, res: Response) {
    try {
        const { phrase, author_id, day } = req.body;
        await DailyPhrase.create({ phrase, day, author_id }).save();
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
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
