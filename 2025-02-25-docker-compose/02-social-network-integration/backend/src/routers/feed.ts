import { Router } from "express";
import { getFeed } from "../controllers/feed/controller";
import enforceAuth from "../middlewares/enforce-auth";

const router = Router()

router.use(enforceAuth)

router.get('/', getFeed)

export default router