import Joi from "joi";

export const followValidator = Joi.object({
    id: Joi.string().hex().length(24).required()
})

export const unfollowValidator = followValidator