import { NextFunction, Request, Response } from "express";
import Category from "../../models/category";
import Product from "../../models/product";

export async function getPerCategory(req: Request<{categoryId: string}>, res: Response, next: NextFunction) {
    try {
        const { categoryId } = req.params
        const category = await Category.findByPk(categoryId, {
            include: [ Product ]
        })
        res.json(category.products)
    } catch (e) {
        next(e)
    }
}

export async function add(req: Request<{}, {}, {
    name: string,
    productionTime: Date,
    expirationTime: Date,
    categoryId: string,
    price: number
}>, res: Response, next: NextFunction) {
    try {
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (e) {
        next(e)
    }
}

export async function remove(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        await Product.destroy({where: {id}})
        res.json({success: true})
    } catch (e) {
        next(e)
    }
}