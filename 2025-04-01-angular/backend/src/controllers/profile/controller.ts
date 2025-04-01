import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";
import socket from "../../io/io";
import SocketMessages from "socket-enums-shaharsol";
import { PostModel } from "../../models/post";
import mongoose from "../../db/mongoose";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        const profile = await PostModel.find({ userId }).populate(['user', 'comments.user'])

        res.json(profile.map(doc => doc.toObject()))

    } catch (e) {
        next(e)
    }
}

export async function getPost(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const post = await PostModel.findById(req.params.id)
        res.json(post.toObject())
    } catch (e) {
        next(e)
    }
}

export async function deletePost(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const _id = req.params.id
        const deleteResponse = await PostModel.deleteOne({ _id })

        if(deleteResponse.deletedCount === 0) return next(new AppError(StatusCodes.NOT_FOUND, 'the post you were trying to delete does not exist'))

        res.json({
            success: true
        })

    } catch (e) {
        next(e)
    }
}

export async function createPost(req: Request<{}, {}, {}>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        let createParams = { ...req.body, userId, user: userId, createdAt: new Date() }

        // if(req.imageUrl) {
        //     const { imageUrl } = req
        //     createParams = { ...createParams, imageUrl }
        // }

        const post = new PostModel(createParams)
        await post.save()
        res.json(post.toObject())
        socket.emit(SocketMessages.NEW_POST, {
            from: req.headers['x-client-id'], // req.header(), req.get()
            data: post
        })
    } catch (e) {
        next(e)
    }
}

export async function updatePost(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const post = await PostModel.findById(req.params.id)

        const { title, body } = req.body
        post.title = title
        post.body = body
        await post.save() // <= this command generates the actual MQL UPDATE
        res.json(post.toObject())

    } catch (e) {
        next(e)
    }
}
