import { Request, Response } from "express";
import { errorResponse } from "../../../util";
import { Author } from "../../model";

export async function getAuthor(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const author = await Author.findOneOrFail({ where: { id } });
    res.send(author);
  } catch (error) {
    res.send(errorResponse(error));
  }
}
