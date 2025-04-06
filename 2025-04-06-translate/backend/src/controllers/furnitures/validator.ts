import Joi from "joi";

export const newFurnitureValidator = Joi.object({
    type: Joi.string().min(3).required(),
    size: Joi.string().min(10).required(),
    price: Joi.number().min(0).required(),
    color: Joi.string().min(3).required(),
})