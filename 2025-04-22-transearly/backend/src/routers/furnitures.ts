import { Router } from "express";
import { create, getAll } from "../controllers/furnitures/controller";
import { newFurnitureValidator } from "../controllers/furnitures/validator";
import validation from "../middlewares/validation";

const furnituresRouter = Router()

furnituresRouter.get('/', getAll)
furnituresRouter.post('/', validation(newFurnitureValidator), create)

export default furnituresRouter