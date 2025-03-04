import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import path from "path";
import { v4 } from "uuid";
import config from 'config'

declare global {
    namespace Express {
        interface Request {
            imageUrl?: string
        }
    }
}

export default async function fileUploader (req: Request, res: Response, next: NextFunction) {
    if (!req.files) return next()

    // handle actual file upload
    const s3Client = new S3Client({
        region: 'us-east-1',
        forcePathStyle: true, // required only for localstack
        credentials: {
            accessKeyId: 'test',
            secretAccessKey: 'test'
        },
        endpoint: 'http://127.0.0.1:4566'
    })

    const postImage = req.files.postImage as UploadedFile

    try {
        await s3Client.send(
            new CreateBucketCommand({
                Bucket: config.get<string>('s3.bucket')
            })
        )
    } catch (e) {
        // ignore
        console.log('Bucket probably already exist')
    }

    const upload = new Upload({
        client: s3Client,
        params: {
            Bucket: config.get<string>('s3.bucket'),
            Key: `${v4()}${path.extname(postImage.name)}`, 
            Body: postImage.data
        }
    })

    const response = await upload.done()
    
    req.imageUrl = response.Location
    next()
}