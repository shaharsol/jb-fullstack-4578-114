import { Router } from "express";
import { getPost, getProfile } from "../controllers/profile/controller";

const profileRouter = Router()

profileRouter.get('/', getProfile)
profileRouter.get('/:id', getPost)

export default profileRouter