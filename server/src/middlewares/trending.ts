import { Request, Response } from "express";
import { errorResponse } from "../components/util";

export function trending(entity: any, limit: number, where = "") {
  return async (_: Request, res: Response) => {
    try {
      const query = entity.createQueryBuilder("data");
      query.take(limit);
      if (where !== "") {
        query.where(where);
      }
      const trend = await query.getMany();
      res.send(trend);
    } catch (error) {
      res.status(400).send(errorResponse(error));
    }
  };
}
