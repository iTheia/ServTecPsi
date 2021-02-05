import { Request } from "express";
import { IUserInfo } from "./auth/types";

export interface IRequest extends Request {
    userInfo: IUserInfo;
}

export interface IPaginatedRequest extends Request {
    paginatedData: IResult;
}

export interface IPage {
    page: number;
    limit: number;
}

export interface IResult {
    data: any[];
    page: number;
    next: IPage | null;
    previous: IPage | null;
}
