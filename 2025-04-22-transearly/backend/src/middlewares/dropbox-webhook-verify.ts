import { NextFunction, Request, Response } from "express";
export default function dropboxWebhookVerify(req: Request, res: Response, next: NextFunction) {
    // get the x-dropbox-signature from req.headers and verify the request actually arrived from dropbox
    next()
}
