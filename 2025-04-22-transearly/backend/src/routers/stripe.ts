import { Router } from "express";
import { createPaymentIntent } from "../controllers/stripe/controller";

const stripeRouter = Router()

stripeRouter.post('/payment-intent', createPaymentIntent)

export default stripeRouter