import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import { createHmac } from "crypto";
import config from 'config'
import { sign } from "jsonwebtoken";


function hashPassword(password: string): string {
    return createHmac('sha256', config.get<string>('app.secret'))
            .update(password)
            .digest('hex')
}

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const { username, password } = req.body
        const user = await User.findOne({
            where: {
                username,
                password: hashPassword(password)
            }
        })
        const jwt = sign(user.get({ plain: true }), config.get<string>('app.jwtSecret'))
        res.json({ jwt })
    } catch (e) {
        next(e)
    }
}