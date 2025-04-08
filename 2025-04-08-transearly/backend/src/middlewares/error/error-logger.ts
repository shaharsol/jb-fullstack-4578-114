import { NextFunction, Request, Response } from "express";

export default function errorLogger(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.message)
    next(err)
}