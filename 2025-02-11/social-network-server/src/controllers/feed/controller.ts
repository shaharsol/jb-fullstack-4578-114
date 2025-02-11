import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Post from "../../models/post";
import postIncludes from "../common/post-includes";
import sequelize from "../../db/sequelize";

export async function getFeed(req: Request, res: Response, next: NextFunction) {
    try {
        // const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

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

        // const feed = user.following.reduce((cummulative: Post[], { posts }) => {
        //     return [...cummulative, ...posts]
        // }, [])

        // res.json(feed)        

        const result = sequelize.query(`
            select	id, title
            from 	posts
            JOIN	follows on posts.user_id = follows.followee_id
            AND		follows.follower_id = '1230ae30-dc4f-4752-bd84-092956f5c633'
        `)        

    } catch (e) {
        next(e)
    }
}