import { NextFunction, Request, Response } from "express";
import Stripe from "stripe";
import config from 'config'
import { UserModel } from "../../models/user";

export async function createPaymentIntent(req: Request, res: Response, next: NextFunction) {
    const clientSecret = config.get<string>('stripe.secret')
    try {
        const stripe = new Stripe(clientSecret);
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 100,
            currency: 'usd',
            automatic_payment_methods: {
              enabled: true,
            },
        });

        res.json({
            paymentIntent,
            clientSecret 
        })
    } catch (e) {
        next(e)
    }
}

export async function updateUserPaymentIntent(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserModel.findById(req.params.userId)
        user.paymentIntent = req.params.paymentIntentId
        await user.save()
        res.json(user)
    } catch (e) {
        next(e)
    }
}