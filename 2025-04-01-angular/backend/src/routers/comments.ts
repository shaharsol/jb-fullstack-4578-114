import { Router } from "express";
import validation from "../middlewares/validation";
import { deleteCommentParamsValidator, newCommentParamsValidator, newCommentValidator } from "../controllers/comments/validator";
import { createComment, deleteComment } from "../controllers/comments/controller";
import paramsValidation from "../middlewares/params-validation";
import enforceAuth from "../middlewares/enforce-auth";

const router = Router()

router.use(enforceAuth)

router.post('/:postId', validation(newCommentValidator), paramsValidation(newCommentParamsValidator), createComment)
router.delete('/:postId/:commentId', paramsValidation(deleteCommentParamsValidator), deleteComment)
export default router