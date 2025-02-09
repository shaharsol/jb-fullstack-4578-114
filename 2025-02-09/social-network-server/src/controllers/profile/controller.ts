import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Post from "../../models/post";
import Comment from "../../models/comment";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const user = await User.findByPk(userId, {
            include: [ {
                model: Post,
                include: [ 
                    User,
                    {
                        model: Comment,
                        include: [ User ]
                    }
                ]
            } ]
        })
        // console.log(user.get({ plain: true }))
        res.json(user.posts)

    } catch (e) {
        next(e)
    }
}

export async function getPost(req: Request, res: Response, next: NextFunction) {
    const post = await Post.findByPk('gjkdfgjdkgjdf')
}