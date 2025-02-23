import { NextFunction, Request, Response } from "express";
import Comment from "../../models/comment";
import User from "../../models/user";

export async function createComment(req: Request<{postId: string}>, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const { postId } = req.params 

        const comment = await Comment.create({
            userId,
            postId,
            ...req.body
        })
        await comment.reload({
            include: [ User ]
        })
        res.json(comment)
    } catch (e) {
        next(e)
    }
}