import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import { createHmac } from "crypto";
import config from 'config'
import { sign } from "jsonwebtoken";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";


function hashPassword(password: string): string {
    return createHmac('sha256', config.get<string>('app.secret'))
            .update(password)
            .digest('hex')
}

export async function login(req: Request<{}, {}, {username: string, password: string}>, res: Response, next: NextFunction) {
    try {
        const { username, password } = req.body
        const user = await User.findOne({
            where: {
                username,
                password: hashPassword(password)
            },
        })

        if(!user) return next(new AppError(StatusCodes.UNAUTHORIZED, 'wrong credentials'))


        const jwt = sign(user.get({ plain: true }), config.get<string>('app.jwtSecret'))
        res.json({ jwt })
    } catch (e) {
        next(e)
    }
}

export async function signup(req: Request<{}, {}, {username: string, password: string, name: string}>, res: Response, next: NextFunction) {
    const { username, password, name } = req.body
    try {

        const user = await User.create({ 
            username,
            name,
            password: hashPassword(password)
        })

        const jwt = sign(user.get({ plain: true }), config.get<string>('app.jwtSecret'))
        res.json({ jwt })

    } catch (e) {
        // if (e.name === 'SequelizeUniqueConstraintError') return next({
        //     status: 409,
        //     message: `username ${username} already exists. Please choose another username.`
        // })
        if (e.name === 'SequelizeUniqueConstraintError') return next(
            new AppError(
                StatusCodes.CONFLICT, 
                `username ${username} already exists. Please choose another username.`
            )
        )
        next(e)
    }
}