import { Request, Response } from "express";
import { Test } from "../../model";
import { errorResponse } from "../../../util";

export async function deleteTest(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Test.createQueryBuilder("test")
      .where("test.id = :id", { id })
      .delete()
      .execute();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
