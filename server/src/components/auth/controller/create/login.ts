import { compare } from "bcryptjs";
import { Request, Response } from "express";
import {
  sendRefreshToken,
  createRefreshToken,
  createAccessToken,
} from "../../util";
import { errorResponse } from "../../../util";
import { Login } from "../../model";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await Login.findOne({
      where: [{ email }, { username: email }],
      relations: ["user", "user.avatar"],
    });
    if (!user) {
      throw new Error("Usuario o Contraseña incorrectos");
    }
    const validPassword = await compare(password, user.password);
    if (!validPassword) {
      throw new Error("Usuario o Contraseña incorrectos");
    }
    sendRefreshToken(res, createRefreshToken(user));
    res.send({ token: createAccessToken(user) });
  } catch (error) {
    res.send(errorResponse(error));
  }
};
