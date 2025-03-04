import { Router } from "express";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/params-validation";
import { deleteProductValidator, getPerCategoryValidator, newProductValidator } from "../controllers/products/validator";
import { add, getPerCategory, remove } from "../controllers/products/controller";

const router = Router()

router.get('/:categoryId', paramsValidation(getPerCategoryValidator), getPerCategory)
router.post('/', validation(newProductValidator), add)
router.delete('/:id', paramsValidation(deleteProductValidator), remove)

export default router