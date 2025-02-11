import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function validation(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.body = await validator.validateAsync(req.body)
            next()
        } catch (e) {
            next({
                status: 422, // 422 http code for Unprocessable Entity
                message: e.message
            })
        }
    }
}
