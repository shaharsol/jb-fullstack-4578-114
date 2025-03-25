import { Router } from "express";
import validation from "../middlewares/validation";
import { loginValidator, signupValidator } from "../controllers/auth/validator";
import { login, signup } from "../controllers/auth/controller";

const router = Router()

router.post('/login', validation(loginValidator), login)
router.post('/signup', validation(signupValidator), signup)

export default router