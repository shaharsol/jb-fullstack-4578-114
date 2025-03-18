import Joi from "joi";

export const followValidator = Joi.object({
    id: Joi.string().uuid().required()
})

export const unfollowValidator = followValidator