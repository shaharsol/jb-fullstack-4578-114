import { Router } from "express";
import { follow, getFollowers, getFollowing, unfollow } from "../controllers/follows/controller";
import paramsValidation from "../middlewares/params-validation";
import { followValidator, unfollowValidator } from "../controllers/follows/validator";
import enforceAuth from "../middlewares/enforce-auth";

const router = Router()

router.use(enforceAuth)

router.get('/followers', getFollowers)
router.get('/following', getFollowing)
router.post('/follow/:id', paramsValidation(followValidator), follow)
// i can also use regex validation for the route params
// and then i don't need the validation middleware
// however, i will personally prefer the middleware
// router.post('/follow/:id(^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$)', follow)
router.post('/unfollow/:id', paramsValidation(unfollowValidator), unfollow)

export default router