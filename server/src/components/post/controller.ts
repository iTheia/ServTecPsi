import { Request, Response } from "express";
import { IPaginatedRequest } from "../types";
import { errorResponse } from "../util";
import { Post } from "./model";

export async function createPost(req: Request, res: Response) {
    try {
        const { title } = req.body;
        const { id } = await Post.create({ title }).save();
        res.send(id);
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
export async function getPost(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const post = await Post.createQueryBuilder("post")
            .where("post.id = :id", { id })
            .leftJoinAndSelect("post.paragraphs", "paragraphs")
            .leftJoinAndSelect("paragraphs.image", "image")
            .select(["post", "image.path", "paragraphs.text", "paragraphs"])
            .getOne();
        res.send(post);
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function getPosts(req: IPaginatedRequest, res: Response) {
    res.send(req.paginated);
}

export async function updatePost(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const body = req.body;
        const post = await Post.findOneOrFail(id);
        await Post.save({ ...post, ...body });
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}

export async function deletePost(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Post.createQueryBuilder("post")
            .where("post.id = :id", { id })
            .delete()
            .execute();
        res.send({ okay: true });
    } catch (error) {
        res.status(400).send(errorResponse(error));
    }
}
