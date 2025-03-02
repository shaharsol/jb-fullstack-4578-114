import { NextFunction, Request, Response } from "express";
import Comment from "../../models/comment";
import User from "../../models/user";

export async function createComment(req: Request<{postId: string}>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

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