import { Request, Response } from "express";
import { errorResponse } from "../../../util";
import { Author } from "../../model";

export async function createAuthor(req: Request, res: Response) {
  try {
    const { name } = req.body;
    await Author.create({ name }).save();
    res.send({ error: false });
  } catch (error) {
    res.send(errorResponse(error));
  }
}
