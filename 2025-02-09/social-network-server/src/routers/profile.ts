import { Router } from "express";
import { createPost, deletePost, getPost, getProfile } from "../controllers/profile/controller";
import validation from "../middlewares/validation";
import { newPostValidator } from "../controllers/profile/validator";

const profileRouter = Router()

profileRouter.get('/', getProfile)
profileRouter.get('/:id', getPost)
profileRouter.delete('/:id', deletePost)
profileRouter.post('/', validation(newPostValidator), createPost)

export default profileRouter