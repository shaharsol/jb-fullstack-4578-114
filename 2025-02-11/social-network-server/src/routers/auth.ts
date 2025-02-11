import { Router } from "express";
import validation from "../middlewares/validation";
import { loginValidator } from "../controllers/auth/validator";
import { login } from "../controllers/auth/controller";

const router = Router()

router.post('/login', validation(loginValidator), login)

export default router