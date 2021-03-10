import { NextFunction, Response } from "express";
import { IRequest } from "../../types";
import AccessControlMiddleware from "accesscontrol-middleware";
import { ac } from "./roles";
import { roles } from "../../auth";

const accessControlMiddleware = new AccessControlMiddleware(ac);

export const canUse = (role: roles) => {
  return (req: IRequest, res: Response, next: NextFunction) => {
    if (req.userInfo.role === role || role === "admin") {
      next();
    }
    res.status(401).send({ error: true, message: "fordiben" });
  };
};

export function checkPermision(resource: string, owner: boolean = false) {
  return (req: IRequest, res: Response, next: NextFunction) => {
    const action =
      req.method === "POST"
        ? "create"
        : req.method === "GET"
        ? "read"
        : req.method === "GET"
        ? "delete"
        : req.method === "PUT"
        ? "update"
        : "";
    if (owner) {
      accessControlMiddleware.check({
        resource,
        action,
      });
    } else {
      accessControlMiddleware.check({
        resource,
        action,
        checkOwnerShip: true,
        operands: [
          { source: "user", key: "_id" },
          { source: "params", key: "userId" },
        ],
      });
    }
  };
}
