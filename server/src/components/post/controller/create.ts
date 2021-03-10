import { Request, Response } from "express";
import { errorResponse } from "../../util";
import { Post } from "../model";

export async function createPost(req: Request, res: Response) {
  try {
    const { title } = req.body;
    const { id } = await Post.create({ title }).save();
    res.send(id);
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
