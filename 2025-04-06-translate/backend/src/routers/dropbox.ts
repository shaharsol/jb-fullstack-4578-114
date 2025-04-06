import { Router } from "express";
import { create, getAll } from "../controllers/furnitures/controller";
import { newFurnitureValidator } from "../controllers/furnitures/validator";
import validation from "../middlewares/validation";
import dropboxAuth from "../auth/dropbox";
import { sign } from "jsonwebtoken";
import config from "config";
const dropboxRouter = Router()

dropboxRouter.get('/auth', dropboxAuth.authenticate('dropbox-oauth2'))
dropboxRouter.get('/callback', dropboxAuth.authenticate('dropbox-oauth2', {
    session: false,
    failureRedirect: 'http://localhost:5173/'
}), function(req, res) {
    // create jwt from req.user
    const jwt = sign(req.user, config.get('app.jwtSecret'))
    res.redirect(`http://localhost:5173/login-success?jwt=${jwt}`)
})

export default dropboxRouter