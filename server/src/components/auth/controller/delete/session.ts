import { Request, Response } from "express";
import { sendRefreshToken } from "../../util";
import { errorResponse } from "../../../util";

export const closeSession = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new Error("No esta logeado");
    }
    sendRefreshToken(res, "");
    res.send({ error: false });
  } catch (error) {
    res.send(errorResponse(error));
  }
};
