import { NextFunction, Request, Response } from "express";
import { FurnitureModel } from "../../models/furniture";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {

        const furnitures = await FurnitureModel.find()

        res.json(furnitures.map(doc => doc.toObject()))

    } catch (e) {
        next(e)
    }
}

export async function create(req: Request<{}, {}, {}>, res: Response, next: NextFunction) {
    try {

        const furniture = new FurnitureModel(req.body)
        await furniture.save()
        res.json(furniture.toObject())
    } catch (e) {
        next(e)
    }
}