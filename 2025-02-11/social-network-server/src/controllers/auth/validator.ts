import Joi from "joi";

export const loginValidator = Joi.object({
    username: Joi.string().min(6).max(40).required(),
    password: Joi.string().min(6).max(40).required()
})