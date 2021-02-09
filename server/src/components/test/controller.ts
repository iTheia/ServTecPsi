import { Request, Response } from "express";
import { errorResponse } from "../util";
import { Test } from "./model";

export async function createTest(req: Request, res: Response) {
    try {
        const { title, description } = req.body;
        const { id } = await Test.create({ title, description }).save();
        res.send(id);
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

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

export async function getTests(req: Request, res: Response) {
    try {
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function updateTest(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const body = req.body;
        const test = await Test.findOne(id);
        await Test.save({ ...test, ...body });
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function deleteTest(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Test.createQueryBuilder("test")
            .where("test.id = :id", { id })
            .delete()
            .execute();
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
