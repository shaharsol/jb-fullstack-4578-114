import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import path from "path";
import { v4 } from "uuid";
import config from 'config'
import s3Client from "../aws/s3";
import sqsClient, { queueUrl } from "../aws/sqs";
import { SendMessageCommand } from "@aws-sdk/client-sqs";

declare global {
    namespace Express {
        interface Request {
            imageUrl?: string
        }
    }
}

export default async function fileUploader (req: Request, res: Response, next: NextFunction) {
    if (!req.files.postImage) return next()

    const postImage = req.files.postImage as UploadedFile

    const upload = new Upload({
        client: s3Client,
        params: {
            Bucket: config.get<string>('s3.bucket'),
            Key: `${v4()}${path.extname(postImage.name)}`, 
            Body: postImage.data,
            ContentType: postImage.mimetype
        }
    })

    const response = await upload.done()
    console.log(response)

    const sqsResponse = await sqsClient.send(new SendMessageCommand({
        QueueUrl: queueUrl,
        MessageBody: JSON.stringify({
            bucket: response.Bucket,
            key: response.Key
        })
    }))
    console.log(sqsResponse)

    // req.imageUrl = response.Location
    req.imageUrl = `${response.Bucket}/${response.Key}`

    next()
}