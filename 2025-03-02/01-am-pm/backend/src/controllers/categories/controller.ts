import { NextFunction, Request, Response } from "express";
import Category from "../../models/category";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const categories = await Category.findAll()
        res.json(categories)
    } catch (e) {
        next(e)
    }
}