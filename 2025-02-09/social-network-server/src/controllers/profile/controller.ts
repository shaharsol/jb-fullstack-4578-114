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
    try {
        const post = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [ User ]
                }
            ]
        })
        res.json(post)
    } catch (e) {
        next(e)
    }
}

export async function deletePost(req: Request, res: Response, next: NextFunction) {
        try {
        // this is how you delete an EXISTING object:
        // const post = await Post.findByPk(req.params.id)
        // await post.destroy() 

        // this is how you delete, using a static function,
        // when you don't already have a sequelize object:
        const id = req.params.id
        const deletedRows = await Post.destroy({
            where: { id }
        })

        if(deletedRows === 0) return next({
            status: 404,
            message: 'the post you were trying to delete does not exist'
        })

        res.json({
            success: true
        })

    } catch (e) {
        next(e)
    }
}

export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const post = await Post.create({ ...req.body, userId })
        await post.reload({
            include: [
                User,
                {
                    model: Comment,
                    include: [ User ]
                }
            ]
        })
        res.json(post)
    } catch (e) {
        next(e)
    }
}