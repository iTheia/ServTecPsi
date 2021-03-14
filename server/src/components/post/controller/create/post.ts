import { Request, Response } from "express";
import { Post, PostParagraph } from "../../model";
import { trimString, errorResponse } from "../../../util";
import { validateCreatePost } from "../../validation";

export async function createPost(req: Request, res: Response) {
  try {
    const { paragraphs, ...body } = validateCreatePost.validateSync(req.body);
    const { id } = await Post.create({
      ...body,
      slug: trimString(body.title),
    }).save();
    paragraphs.forEach(async ({ image_id, text }) => {
      await PostParagraph.create({ image_id, text, post_id: id }).save();
    });
    res.send(id);
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
