import { Request, Response } from "express";
import { errorResponse } from "../util";
import { PostParagraph } from "./model";
import { createParagraph } from "./validation";

export async function createPostParagraph(req: Request, res: Response) {
    try {
        const body = createParagraph.validateSync(req.body);
        const paragraph = await PostParagraph.create({ ...body }).save();
        res.send(paragraph);
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function getPostParagraph(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const paragraph = await PostParagraph.findOneOrFail(id);
        res.send(paragraph);
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function getPostParagraphs(req: Request, res: Response) {
    try {
        const { post_id } = req.params;
        const paragraphs = await PostParagraph.createQueryBuilder("paragraph")
            .where("paragraph.post_id = :post_id", { post_id })
            .getMany();
        res.send(paragraphs);
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function updatePostParagraph(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const body = req.body;
        const paragraph = await PostParagraph.findOneOrFail(id);
        await PostParagraph.save({ ...paragraph, ...body });
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function deletePostParagraph(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await PostParagraph.createQueryBuilder("paragraph")
            .where("paragraph.id = :id", { id })
            .delete()
            .execute();
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
