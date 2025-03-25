import { NextFunction, Request, Response } from "express";

export async function getFeed(req: Request, res: Response, next: NextFunction) {
    try {
        // const userId = req.userId

        // const user = await User.findByPk(userId, {
        //     include: [ { 
        //         model: User,
        //         as: 'following',
        //         include: [ { 
        //             model: Post,
        //             ...postIncludes
        //         } ]
        //     } ]
        // })

        // const feed = user.following.reduce((cumulative: Post[], { posts }) => {
        //     return [...cumulative, ...posts]
        // }, []).sort((a: Post, b: Post) => a.createdAt < b.createdAt ? 1 : -1)

        // res.json(feed)        

    } catch (e) {
        next(e)
    }
}