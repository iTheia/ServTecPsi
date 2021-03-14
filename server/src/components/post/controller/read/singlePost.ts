import { Request, Response } from "express";
import { Post } from "../../model";
import { errorResponse } from "../../../util";

export async function getPost(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const post = await Post.createQueryBuilder("post")
      .where("post.slug = :slug", { slug: id })
      .leftJoinAndSelect("post.paragraphs", "paragraphs")
      .leftJoinAndSelect("post.image", "post_image")
      .leftJoinAndSelect("paragraphs.image", "image")
      .select([
        "post",
        "image.path",
        "paragraphs.text",
        "paragraphs",
        "post_image.path",
      ])
      .getOne();
    if (!post) {
      throw new Error("not found");
    }
    res.send(post);
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
