import { Request, Response } from "express";
import { Result } from "../../model";
import { errorResponse } from "../../../util";

export async function getResult(req: Request, res: Response) {
  try {
    const { value } = req.query;
    const result = await Result.findOneOrFail({ where: { value } });
    res.send(result);
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
