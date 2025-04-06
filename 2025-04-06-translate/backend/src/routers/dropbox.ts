import { Router } from "express";
import { create, getAll } from "../controllers/furnitures/controller";
import { newFurnitureValidator } from "../controllers/furnitures/validator";
import validation from "../middlewares/validation";
import dropboxAuth from "../auth/dropbox";

const dropboxRouter = Router()

dropboxRouter.get('/auth', dropboxAuth.authenticate('dropbox-oauth2'))
dropboxRouter.get('/callback', () => {})

export default dropboxRouter