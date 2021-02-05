import { Request, Response } from "express";
import { IPaginatedRequest } from "../types";
import { errorResponse } from "../util";
import { Author } from "./author.model";

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
        res.send(req.paginatedData);
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function deleteAuthor(req: Request, res: Response) {
    try {
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function updateAuthor(req: Request, res: Response) {
    try {
    } catch (error) {
        res.send(errorResponse(error));
    }
}
