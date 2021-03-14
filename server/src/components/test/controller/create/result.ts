import { Request, Response } from "express";
import { errorResponse } from "../../../util";
import { Result } from "../../model";

export async function createResult(req: Request, res: Response) {
  try {
    const { image_id, value, text } = req.body;
    const { test_id } = req.params;
    await Result.create({
      image_id,
      value,
      text,
      test_id: parseInt(test_id),
    }).save();
    res.send({ okay: true });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
