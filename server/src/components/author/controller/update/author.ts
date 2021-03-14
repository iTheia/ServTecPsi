import { Request, Response } from "express";
import { errorResponse } from "../../../util";
import { Author } from "../../model";

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
