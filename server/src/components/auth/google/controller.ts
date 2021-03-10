import { Request, Response } from "express";
import { errorResponse } from "../../util";
import { OAuth2Client } from "google-auth-library";
import { config } from "../../../config";
import { Login } from "../model";
import { File } from "../../file";
import { User } from "../../user";
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
} from "../util";

const client = new OAuth2Client(config.googleClientId);

export async function createGoogleUser(req: Request, res: Response) {
  try {
    const { tokenId } = req.body;
    const {
      payload: { email, hd, email_verified, name, picture },
    }: any = await client.verifyIdToken({
      idToken: tokenId,
      audience: config.googleClientId,
    });
    if (hd !== "itdurango.edu.mx") {
      throw new Error("no itd");
    }
    if (!email_verified) {
      throw new Error("no verificado");
    }
    let login = await Login.createQueryBuilder("login")
      .where("email = :email", { email })
      .leftJoinAndSelect("login.user", "user")
      .leftJoinAndSelect("user.avatar", "avatar")
      .getOne();
    if (!login) {
      const { id } = await File.create({
        path: picture,
        type: "",
        size: 0,
      }).save();
      const { id: user_id } = await User.create({ avatar_id: id }).save();
      login = await Login.create({ user_id, email, username: name }).save();
      // @ts-ignore
      login.user = { avatar: { path: picture } };
    }
    sendRefreshToken(res, createRefreshToken(login));
    res.send({ accessToken: createAccessToken(login) });
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}
