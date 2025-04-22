import { Router } from "express";
import { createPaymentIntent, updateUserPaymentIntent } from "../controllers/stripe/controller";

const stripeRouter = Router()

stripeRouter.post('/payment-intent', createPaymentIntent)
stripeRouter.post('/update-user-payment-intent/:userId/:paymentIntentId', updateUserPaymentIntent)
export default stripeRouter