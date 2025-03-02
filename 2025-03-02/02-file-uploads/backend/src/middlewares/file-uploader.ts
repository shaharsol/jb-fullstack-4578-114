import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

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
                Bucket: 'il.co.johnbryce.shaharsol'
            })
        )
    } catch (e) {
        // ignore
        console.log('Bucket probably already exist')
    }


    const upload = new Upload({
        client: s3Client,
        params: {
            Bucket: 'il.co.johnbryce.shaharsol',
            Key: postImage.name,
            Body: postImage.data
        }
    })

    const response = await upload.done()
    
    // req.imageUrl = 'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg'
    req.imageUrl = response.Location
    next()
}