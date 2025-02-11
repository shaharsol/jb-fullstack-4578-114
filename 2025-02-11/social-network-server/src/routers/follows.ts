import { Router } from "express";
import { follow, getFollowers, getFollowing, unfollow } from "../controllers/follows/controller";

const router = Router()

router.get('/followers', getFollowers)
router.get('/following', getFollowing)
router.post('/follow/:id', follow)
router.post('/unfollow/:id', unfollow)

export default router