import { Router } from "express";
import { createPost, deletePost, getPost, getProfile, updatePost } from "../controllers/profile/controller";
import validation from "../middlewares/validation";
import { newPostFilesValidator, newPostValidator, updatePostValidator } from "../controllers/profile/validator";
import enforceAuth from "../middlewares/enforce-auth";
import filesValidation from "../middlewares/files-validation";
import fileUploader from "../middlewares/file-uploader";

const profileRouter = Router()

profileRouter.use(enforceAuth)

profileRouter.get('/', getProfile)
profileRouter.get('/:id', getPost)
profileRouter.delete('/:id', deletePost)
profileRouter.post('/', validation(newPostValidator), filesValidation(newPostFilesValidator), fileUploader, createPost)
profileRouter.patch('/:id', validation(updatePostValidator), updatePost)

export default profileRouter