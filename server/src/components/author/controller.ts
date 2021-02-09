import { Request, Response } from "express";
import { IPaginatedRequest } from "../types";
import { errorResponse } from "../util";
import { Author } from "./model";

export async function createAuthor(req: Request, res: Response) {
    try {
        const { name } = req.body;
        await Author.create({ name }).save();
        res.send({ error: false });
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function getAuthor(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const author = await Author.findOneOrFail({ where: { id } });
        res.send(author);
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function getAuthors(req: IPaginatedRequest, res: Response) {
    try {
        res.send(req.paginated);
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function deleteAuthor(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Author.delete(id);
        res.send({ okay: true });
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function updateAuthor(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const body = req.body;
        const author = await Author.findOne(id);
        await Author.save({ ...author, ...body });
        res.send({ okay: true });
    } catch (error) {
        res.send(errorResponse(error));
    }
}
