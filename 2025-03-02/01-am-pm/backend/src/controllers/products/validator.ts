import Joi from "joi";

export const newProductValidator = Joi.object({
    name: Joi.string().max(255).required(),
    price: Joi.number().min(0).required(),
    productionTime: Joi.date().required(),
    expirationTime: Joi.date().required(),
    categoryId: Joi.string().uuid().required()
})

export const getPerCategoryValidator = Joi.object({
    categoryId: Joi.string().uuid().required()
})

export const deleteProductValidator = Joi.object({
    id: Joi.string().uuid().required()
})
