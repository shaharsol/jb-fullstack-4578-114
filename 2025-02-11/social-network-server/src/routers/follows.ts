import { Router } from "express";
import { getFollowers, getFollowing } from "../controllers/follows/controller";

const router = Router()

router.get('/followers', getFollowers)
router.get('/following', getFollowing)

export default router