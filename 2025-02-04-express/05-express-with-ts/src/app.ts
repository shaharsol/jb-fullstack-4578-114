import express, { NextFunction, Request, Response } from 'express'

function getUser(req: Request, res: Response, next: NextFunction) {
    res.json({
        success: true
    })
}

const app = express()

app.use(getUser)

app.listen(3000, () => console.log('started...'))
