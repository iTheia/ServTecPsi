import { Response } from "express";
import { IPaginatedRequest } from "../../types";

export async function getPosts(req: IPaginatedRequest, res: Response) {
  res.send(req.paginated);
}
