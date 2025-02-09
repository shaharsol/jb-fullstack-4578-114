import { Router } from "express";
import { createPost, deletePost, getPost, getProfile } from "../controllers/profile/controller";

const profileRouter = Router()

profileRouter.get('/', getProfile)
profileRouter.get('/:id', getPost)
profileRouter.delete('/:id', deletePost)
profileRouter.post('/', createPost)

export default profileRouter