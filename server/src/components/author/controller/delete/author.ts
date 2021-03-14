import { Request, Response } from "express";
import { Author } from "../../model";
import { errorResponse } from "../../../util";

export async function deleteAuthor(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Author.delete(id);
    res.send({ okay: true });
  } catch (error) {
    res.send(errorResponse(error));
  }
}
