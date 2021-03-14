import { Request, Response } from "express";
import { Post } from "../../model";
import { errorResponse } from "../../../util";

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
