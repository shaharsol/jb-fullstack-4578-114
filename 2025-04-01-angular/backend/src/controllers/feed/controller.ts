import { NextFunction, Request, Response } from "express";
import { PostModel } from "../../models/post";
import { UserModel } from "../../models/user";

export async function getFeed(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        const user = await UserModel.findById(userId)
        
        const feed = await PostModel.find({
            userId: {
                $in: user.following
            }
        })

        res.json(feed.map(post => post.toObject()))        

    } catch (e) {
        next(e)
    }
}