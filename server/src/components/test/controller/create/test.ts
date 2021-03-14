import { Request, Response } from "express";
import { Test } from "../../model";
import { validateCreateTest } from "../../validation";
import { trimString, errorResponse } from "../../../util";

export async function createTest(req: Request, res: Response) {
  try {
    const body = validateCreateTest.validateSync(req.body);
    const { id } = await Test.create({
      ...body,
      slug: trimString(body.title),
    }).save();
    res.send(id);
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
