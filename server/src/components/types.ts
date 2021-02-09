import { Request } from "express";
import { IUserInfo } from "./auth/types";

export interface IRequest extends Request {
    userInfo: IUserInfo;
}

export interface IPaginatedRequest extends Request {
    paginated: IResult;
}

export interface IPage {
    page: number;
    limit: number;
}

export interface IResult {
    data: any[];
    page: number;
    from: number;
    to: number;
    total: number;
    next_page: IPage | null;
    prev_page: IPage | null;
}
