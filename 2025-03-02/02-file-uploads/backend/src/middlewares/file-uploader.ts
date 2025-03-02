import { NextFunction, Request, Response } from "express";

declare global {
    namespace Express {
        interface Request {
            imageUrl?: string
        }
    }
}

export default function fileUploader (req: Request, res: Response, next: NextFunction) {
    if (!req.files) return next()

    // handle actual file upload
    
    req.imageUrl = 'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg'
    next()
}