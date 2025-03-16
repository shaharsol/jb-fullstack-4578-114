import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app-error";
import { StatusCodes } from "http-status-codes";

export default function notFound(req: Request, res: Response, next: NextFunction) {
    next(new AppError(StatusCodes.NOT_FOUND, 'not found'))
}