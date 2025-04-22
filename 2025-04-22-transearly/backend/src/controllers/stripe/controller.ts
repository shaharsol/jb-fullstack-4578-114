import { NextFunction, Request, Response } from "express";
import Stripe from "stripe";
import config from 'config'

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