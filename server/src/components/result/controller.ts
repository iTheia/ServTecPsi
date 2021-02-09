import { Request, Response } from "express";
import { errorResponse } from "../util";
import { Result } from "./model";

export async function createResult(req: Request, res: Response) {
    try {
        const { image_id, value, text } = req.body;
        const { test_id } = req.params;
        await Result.create({
            image_id,
            value,
            text,
            test_id: parseInt(test_id),
        }).save();
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function getResult(req: Request, res: Response) {
    try {
        const { value } = req.query;
        const result = await Result.findOneOrFail({ where: { value } });
        res.send(result);
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function updateResult(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const body = req.body;
        const result = await Result.findOneOrFail(id);
        await Result.save({ ...result, ...body });
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function deleteResult(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Result.createQueryBuilder("result")
            .where("result.id = :id", { id })
            .delete()
            .execute();
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
