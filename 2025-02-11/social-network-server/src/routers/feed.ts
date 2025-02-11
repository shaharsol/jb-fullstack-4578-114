import { Router } from "express";
import { getFeed } from "../controllers/feed/controller";

const router = Router()

router.get('/', getFeed)

export default router