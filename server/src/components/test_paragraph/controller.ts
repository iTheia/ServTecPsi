import { Request, Response } from "express";
import { errorResponse } from "../util";
import { TestParagraph } from "./model";
import { createParagraph } from "./validation";

export async function createTestParagraph(req: Request, res: Response) {
    try {
        const body = createParagraph.validateSync(req.body);
        await TestParagraph.create(body).save();
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
export async function getTestParagraph(req: Request, res: Response) {
    try {
        const { test_id } = req.params;
        const paragraph = await TestParagraph.createQueryBuilder("paragraph")
            .where("paragraph.test_id = :test_id", { test_id })
            .getMany();
        res.send(paragraph);
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
export async function updateTestParagraph(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const body = req.body;
        const paragraph = await TestParagraph.findOne(id);
        await TestParagraph.save({ ...paragraph, ...body });
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
export async function deleteTestParagraph(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await TestParagraph.createQueryBuilder("paragraph")
            .where("paragraph.id = :id", { id })
            .delete()
            .execute();

        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
