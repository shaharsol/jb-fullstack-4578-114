import Joi from "joi";

export const newCommentValidator = Joi.object({
    body: Joi.string().min(20).required()
})

export const newCommentParamsValidator = Joi.object({
    postId: Joi.string().uuid().required()
})