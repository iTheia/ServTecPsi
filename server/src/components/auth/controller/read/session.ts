import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { config } from "../../../../config";
import {
  sendRefreshToken,
  createRefreshToken,
  createAccessToken,
} from "../../util";
import { errorResponse } from "../../..";
import { Login } from "../../model";
import { IUserInfo } from "../../types";

export const getCurrentSession = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new Error("No esta logeado");
    }
    const { id } = verify(token, config.token) as IUserInfo;
    const user = await Login.findOneOrFail(id, {
      relations: ["user", "user.avatar"],
    });
    sendRefreshToken(res, createRefreshToken(user));
    res.send({ accessToken: createAccessToken(user) });
  } catch (error) {
    res.status(403).send(errorResponse(error));
  }
};
