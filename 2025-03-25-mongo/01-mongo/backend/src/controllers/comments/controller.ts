import { NextFunction, Request, Response } from "express";
import { io } from "socket.io-client";
import socket from "../../io/io";
import SocketMessages from "socket-enums-shaharsol";
import { PostModel } from "../../models/post";

export async function createComment(req: Request<{postId: string}>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        const { postId } = req.params 

        // 1. javascript way
        // const post = await PostModel.findById(postId)
        // post.comments.push({...req.body, userId, createdAt: new Date()})
        // await post.save()

        // 2. the mongo way
        const post = await PostModel.findByIdAndUpdate(postId, {
            $push: {
                comments: {...req.body, userId, createdAt: new Date()}
            }
        }, {
            new: true
        })

        res.json(post.toObject())
        // socket.emit(SocketMessages.NEW_COMMENT, {
        //     from: req.headers['x-client-id'], // req.header(), req.get()
        //     data: comment
        // })
    } catch (e) {
        next(e)
    }
}