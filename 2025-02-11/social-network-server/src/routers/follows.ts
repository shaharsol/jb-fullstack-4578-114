import { Router } from "express";
import { follow, getFollowers, getFollowing } from "../controllers/follows/controller";

const router = Router()

router.get('/followers', getFollowers)
router.get('/following', getFollowing)
router.post('/follow/:id', follow)

export default router