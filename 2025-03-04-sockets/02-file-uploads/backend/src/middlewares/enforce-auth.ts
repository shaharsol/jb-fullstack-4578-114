import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app-error";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";
import config from 'config'
import User from "../models/user";

declare global {
    namespace Express {
        interface Request {
            userId: string
        }
    }
}

export default function enforceAuth(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization

    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3MmMyNGM1LWJhODctNDVlOC1iNjRkLWM2NDBkMDZjZGQyYSIsIm5hbWUiOiJzaGFoYXIiLCJ1c2VybmFtZSI6InNoYWhhcjE1IiwicGFzc3dvcmQiOiI3Zjc3MzdmZGRkMjg0MmJjMmFmZGJmMTg2OGFhYThlOTg2YjgzMTMzYTFmMDEwZmU5NjUzNWMxNWU0NTg0NjI4IiwiY3JlYXRlZEF0IjoiMjAyNS0wMi0xMVQxMzoyMDo0OC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMi0xMVQxMzoyMDo0OC4wMDBaIiwiaWF0IjoxNzQwMjk1NTA4fQ.MrDUauiwZiFDc3dtReSCDkbVSpNs1QXO5zo18tSgPgA

    if (!authorizationHeader) return next(new AppError(StatusCodes.UNAUTHORIZED, 'missing authorization header'))

    const parts = authorizationHeader.split(' ')

    if (parts.length !== 2 ) return next(new AppError(StatusCodes.UNAUTHORIZED, 'bad authorization header'))
    if (parts[0] !== 'Bearer' ) return next(new AppError(StatusCodes.UNAUTHORIZED, 'bad authorization header'))

    try {
        const user = verify(parts[1], config.get<string>('app.jwtSecret')) as User
        req.userId = user.id
        next()
    } catch (e) {
        next(new AppError(StatusCodes.UNAUTHORIZED, 'invalid JWT'))
    }
}
