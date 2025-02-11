import { NextFunction, Request, Response } from "express";
import User from "../../models/user";

export async function getFollowers(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const user = await User.findByPk(userId, {
            include: [ { 
                model: User,
                as: 'followers'
            } ]
        })
        res.json(user.followers)
    } catch (e) {
        next(e)
    }
}

export async function getFollowing(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const user = await User.findByPk(userId, {
            include: [ { 
                model: User,
                as: 'following'
            } ]
        })
        res.json(user.following)
    } catch (e) {
        next(e)
    }
}