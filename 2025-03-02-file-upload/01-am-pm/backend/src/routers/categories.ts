import { Router } from "express";
import { getAll } from "../controllers/categories/controller";

const router = Router()

router.get('/', getAll)

export default router