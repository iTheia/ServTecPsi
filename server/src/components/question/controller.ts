import { Request, Response } from "express";
import { errorResponse } from "../util";
import { Question } from "./model";

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

export async function getQuestion(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Question.createQueryBuilder("question")
            .where("question.id = :id", { id })
            .getOne();
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

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
