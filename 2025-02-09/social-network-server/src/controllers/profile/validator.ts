import Joi from "joi";

export const newPostValidator = Joi.object({
    title: Joi.string().min(10).required(),
    body: Joi.string().min(20).required(),
})