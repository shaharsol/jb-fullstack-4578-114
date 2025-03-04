import Joi from "joi";

export const loginValidator = Joi.object({
    username: Joi.string().alphanum().min(6).max(40).required(), 
    password: Joi.string().min(6).max(40).required()
})

export const signupValidator = loginValidator.append({
    name: Joi.string().min(2).max(40).required(),
})
