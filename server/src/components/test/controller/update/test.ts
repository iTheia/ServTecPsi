import { Request, Response } from "express";
import { Test } from "../../model";
import { errorResponse } from "../../../util";

export async function updateTest(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const body = req.body;
    const test = await Test.findOne(id);
    await Test.save({ ...test, ...body });
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
