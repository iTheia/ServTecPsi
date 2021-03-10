import { Request, Response } from "express";
import { errorResponse } from "../../util";
import { Post } from "../model";

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
