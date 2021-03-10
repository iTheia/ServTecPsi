import { Request, Response } from "express";
import { errorResponse } from "../../util";
import { Post } from "../model";

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
