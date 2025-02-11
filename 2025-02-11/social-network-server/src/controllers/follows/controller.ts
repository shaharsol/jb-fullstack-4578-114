import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Follow from "../../models/follow";
import { col } from "sequelize";

export async function getFollowers(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const user = await User.findByPk(userId, {
            include: [ { 
                model: User,
                as: 'followers',
            } ],
            order: [[col('followers.name'), 'ASC']],
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

export async function follow(req: Request<{id: string}>, res: Response, next: NextFunction) {

    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'
        const follow = await Follow.create({
            followerId: userId,
            followeeId: req.params.id
        })
        res.json(follow)
    } catch (e) {
        next(e)
    }
}

export async function unfollow(req: Request<{id: string}>, res: Response, next: NextFunction) {

    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'
        const isUnfollowed = await Follow.destroy({
            where: {
                followerId: userId,
                followeeId: req.params.id
            }
        })
        if (!isUnfollowed) return next({
            status: 404,
            message: 'tried to delete unexisting record'
        })
        res.json({ success: true })
    } catch (e) {
        next(e)
    }
}