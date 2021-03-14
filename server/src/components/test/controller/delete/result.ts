import { Request, Response } from "express";
import { Result } from "../../model";
import { errorResponse } from "../../../util";

export async function deleteResult(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Result.createQueryBuilder("result")
      .where("result.id = :id", { id })
      .delete()
      .execute();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
