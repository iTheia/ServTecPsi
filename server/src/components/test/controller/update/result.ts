import { Request, Response } from "express";
import { Result } from "../../model";
import { errorResponse } from "../../../util";

export async function updateResult(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await Result.findOneOrFail(id);
    await Result.save({ ...result, ...body });
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
