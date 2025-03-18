import Joi from "joi";

export const newPostValidator = Joi.object({
    title: Joi.string().min(10).max(40).required(),
    body: Joi.string().min(20).required(),
})

export const newPostFilesValidator = Joi.object({
    postImage: Joi.object({
        mimetype: Joi.string().valid('image/png', 'image/jpg', 'image/jpeg')
    }).unknown(true).optional() 
})

export const updatePostValidator = newPostValidator