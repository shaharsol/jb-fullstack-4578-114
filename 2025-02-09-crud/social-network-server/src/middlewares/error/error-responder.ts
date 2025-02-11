import { NextFunction, Request, Response } from "express";

export default function errorResponder(err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).send(err.message)
}