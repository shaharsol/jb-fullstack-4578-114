import Joi from "joi";

export const newCommentValidator = Joi.object({
    body: Joi.string().min(20).required()
})